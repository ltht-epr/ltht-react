import {
  QuestionnaireItem,
  QuestionnaireResponse,
  SummaryTableViewType,
  QuestionnaireResponseItem,
  QuestionnaireResponseItemAnswer,
} from '@ltht-react/types'
import { EnsureMaybe, EnsureMaybeArray, partialDateTimeText } from '@ltht-react/utils'
import { FC, useMemo } from 'react'
import Table, { Cell, CellRow, Header, TableData } from '../atoms/table'

export const mapQuestionnaireObjectsToVerticalTableData = (
  definitionItems: Array<QuestionnaireItem>,
  records: QuestionnaireResponse[],
  customRenderCells: CellRender[] = []
): TableData => ({
  headers: [
    {
      header: '',
      accessor: 'property',
    },
    ...records.map((record) => ({
      header: partialDateTimeText(record.authored) ?? '',
      accessor: record?.id ?? '',
      cell: customRenderCells?.find((x) => record.item?.map((j) => j?.linkId)?.includes(x.id))?.render ?? undefined,
    })),
  ],
  rows: definitionItems.map((def) => ({
    cells: [
      {
        key: 'property',
        value: def?.text ?? '',
      },
      ...records.map((record) => ({
        key: record.id,
        value: EnsureMaybe<string>(
          record.item?.find((item) => item?.linkId === def?.linkId)?.answer?.find((answer) => !!answer)?.valueString,
          ''
        ),
      })),
    ],
  })),
})

const recursivelyMapQuestionnaireItemsIntoHeaders = (
  questionnaireItems: QuestionnaireItem[],
  customRenderCells: CellRender[] = []
): Header[] =>
  questionnaireItems.map((questionnaireItem) => {
    const recursiveItems = EnsureMaybeArray<QuestionnaireItem>(questionnaireItem.item ?? [])
    const customRender = customRenderCells.find((x) => x.id === questionnaireItem.linkId)

    return {
      header: questionnaireItem?.text ?? '',
      accessor: recursiveItems.length > 0 ? '' : questionnaireItem?.linkId ?? '',
      subheaders:
        recursiveItems.length > 0
          ? recursivelyMapQuestionnaireItemsIntoHeaders(recursiveItems, customRenderCells)
          : undefined,
      cell: customRender?.render ?? undefined,
    }
  })

const mapQuestionnaireResponsesIntoCellRow = (records: QuestionnaireResponse[]): CellRow[] =>
  records
    .filter((record) => !!record.item)
    .map((record) => {
      const cellArray = [
        {
          key: 'date',
          value: partialDateTimeText(record.authored),
        },
      ]

      record.item
        ?.filter((item) => !!item?.linkId && !!item?.answer)
        .forEach((item) => {
          const linkId = EnsureMaybe<string>(item?.linkId)
          const answer = EnsureMaybe<QuestionnaireResponseItemAnswer>(item?.answer?.find((answer) => !!answer))

          if (answer.item) {
            const items = recursivelyMapResponseItemsToCells(
              EnsureMaybeArray<QuestionnaireResponseItem>(answer.item ?? [])
            )

            items.forEach((x) => {
              cellArray.push({
                key: x.key,
                value: x.value,
              })
            })
          }

          cellArray.push({
            key: linkId,
            value: EnsureMaybe<string>(answer.valueString, ''),
          })
        })

      return { cells: cellArray } as CellRow
    })

const recursivelyMapResponseItemsToCells = (items: QuestionnaireResponseItem[]): Cell[] => {
  const cells: Cell[] = []

  items.forEach((item) => {
    const firstAnswer = item.answer ? item.answer[0] : undefined

    if (item.linkId && firstAnswer) {
      // Always push item's linkId with first answer
      cells.push({
        key: item.linkId,
        value: EnsureMaybe<string>(firstAnswer.valueString, ''),
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

export const mapQuestionnaireObjectsToHorizontalTableData = (
  definitionItems: Array<QuestionnaireItem>,
  records: QuestionnaireResponse[],
  customRenderCells: CellRender[] = []
): TableData => ({
  headers: [
    {
      header: 'Record Date',
      accessor: 'date',
    },
    ...recursivelyMapQuestionnaireItemsIntoHeaders(definitionItems, customRenderCells),
  ],
  rows: mapQuestionnaireResponsesIntoCellRow(records),
})

const QuestionnaireTable: FC<IProps> = ({ definitionItems, records, orientation, customRenderCells = [] }) => {
  const tableData = useMemo(() => {
    if (orientation === 'VERTICAL') {
      return mapQuestionnaireObjectsToVerticalTableData(definitionItems, records, customRenderCells)
    }
    return mapQuestionnaireObjectsToHorizontalTableData(definitionItems, records, customRenderCells)
  }, [orientation, definitionItems, records])

  return <Table tableData={tableData} />
}

export interface CellRender {
  id: string
  render: FC<string>
}

interface IProps {
  orientation: SummaryTableViewType
  definitionItems: QuestionnaireItem[]
  records: QuestionnaireResponse[]
  customRenderCells?: CellRender[]
}

export default QuestionnaireTable
