import {
  QuestionnaireItem,
  QuestionnaireResponse,
  SummaryTableViewType,
  QuestionnaireResponseItem,
} from '@ltht-react/types'
import { answerText, EnsureMaybeArray, partialDateTimeText } from '@ltht-react/utils'
import { FC } from 'react'
import Table, { Cell, CellRow, Header, TableData } from '../atoms/table'

const mapQuestionnaireObjectsToVerticalTableData = (
  definitionItems: Array<QuestionnaireItem>,
  records: QuestionnaireResponse[]
): TableData => {
  return {
    headers: [
      {
        header: '',
        accessor: 'property',
      },
      ...records.map((record) => ({
        header: partialDateTimeText(record.authored) ?? '',
        accessor: record?.id ?? '',
      })),
    ],
    rows: definitionItems.map((def) => {
      return {
        cells: [
          {
            key: 'property',
            value: def?.text ?? '',
          },
          ...records
            .filter((record) => record.item?.some((item) => item?.linkId === def?.linkId))
            .map((record) => {
              const matchingItem = record.item?.find((item) => item?.linkId === def?.linkId)
              const itemValue =
                matchingItem && matchingItem.answer && matchingItem.answer.length > 0
                  ? answerText(matchingItem?.answer[0])
                  : ''
              return {
                key: record.id,
                value: itemValue ?? '',
              }
            }),
        ],
      }
    }),
  }
}

const recursivelyMapQuestionnaireItemsIntoHeaders = (questionnaireItems: QuestionnaireItem[]): Header[] =>
  questionnaireItems.map((questionnaireItem) => {
    const recursiveItems = EnsureMaybeArray<QuestionnaireItem>(questionnaireItem.item ?? [])

    return {
      header: questionnaireItem?.text ?? '',
      accessor: recursiveItems.length > 0 ? '' : questionnaireItem?.linkId ?? '',
      subheaders: recursiveItems.length > 0 ? recursivelyMapQuestionnaireItemsIntoHeaders(recursiveItems) : undefined,
    }
  })

const mapQuestionnaireResponsesIntoCellRow = (records: QuestionnaireResponse[]): CellRow[] => {
  const cellRows: CellRow[] = []

  records.forEach((record) => {
    record.item = EnsureMaybeArray<QuestionnaireResponseItem>(record.item ?? [])

    if (record?.item) {
      const cellArray = [
        {
          key: 'date',
          value: partialDateTimeText(record.authored),
        },
      ]

      record.item.forEach((item) => {
        const prop = item?.linkId
        const value = item?.answer

        if (prop && value) {
          if (value[0]?.item) {
            const items = recursivelyMapResponseItemsToCells(
              EnsureMaybeArray<QuestionnaireResponseItem>(value[0].item ?? [])
            )

            items.forEach((x) => {
              cellArray.push({
                key: x.key,
                value: x.value,
              })
            })
          }
          cellArray.push({
            key: prop,
            value: answerText(value[0]) ?? '',
          })
        }
      })

      cellRows.push({ cells: cellArray } as CellRow)
    }
  })

  return cellRows
}

const recursivelyMapResponseItemsToCells = (items: QuestionnaireResponseItem[]): Cell[] => {
  const cells: Cell[] = []

  items.forEach((item) => {
    const firstAnswer = item.answer ? item.answer[0] : undefined

    if (item.linkId && firstAnswer) {
      // Always push item's linkId with first answer
      cells.push({
        key: item.linkId,
        value: answerText(firstAnswer) ?? '',
      })

      // If first answer has subitems, recurse through them and do the same
      if (firstAnswer.item) {
        recursivelyMapResponseItemsToCells(
          EnsureMaybeArray<QuestionnaireResponseItem>(firstAnswer.item)
        ).forEach((cell) => cells.push(cell))
      }
    }
  })

  return cells
}

const mapQuestionnaireObjectsToHorizontalTableData = (
  definitionItems: Array<QuestionnaireItem>,
  records: QuestionnaireResponse[]
): TableData => {
  return {
    headers: [
      {
        header: 'Record Date',
        accessor: 'date',
      },
      ...recursivelyMapQuestionnaireItemsIntoHeaders(definitionItems),
    ],
    rows: mapQuestionnaireResponsesIntoCellRow(records),
  }
}

const QuestionnaireTable: FC<IProps> = ({ definitionItems, records, orientation }) => {
  const tableData =
    orientation == 'VERTICAL'
      ? mapQuestionnaireObjectsToVerticalTableData(definitionItems, records)
      : mapQuestionnaireObjectsToHorizontalTableData(definitionItems, records)

  return <Table tableData={tableData} />
}

interface IProps {
  orientation: SummaryTableViewType
  definitionItems: QuestionnaireItem[]
  records: QuestionnaireResponse[]
}

export default QuestionnaireTable
