import {
  QuestionnaireItem,
  QuestionnaireResponse,
  SummaryTableViewType,
  QuestionnaireResponseItem,
  QuestionnaireResponseItemAnswer,
  Maybe,
} from '@ltht-react/types'
import { EnsureMaybe, EnsureMaybeArray, partialDateTimeText } from '@ltht-react/utils'
import { FC, useMemo } from 'react'
import Table, { Cell, CellRow, Header, TableData } from '../atoms/table'

export const mapQuestionnaireObjectsToVerticalTableData = (
  definitionItems: Array<QuestionnaireItem>,
  records: QuestionnaireResponse[]
): TableData => ({
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
  rows: buildVerticalCellRowsRecursive(definitionItems, records),
})

const buildVerticalCellRowsRecursive = (
  definitionItems: QuestionnaireItem[],
  records: QuestionnaireResponse[]
): CellRow[] =>
  definitionItems.map((def) => ({
    id: def?.linkId ?? '',
    cells: [
      {
        key: 'property',
        value: def?.text ?? '',
      },
      ...records.map((record) => ({
        key: record.id,
        value: findQuestionnaireResponseAnswerValue(EnsureMaybe(def?.linkId), record?.item ?? []),
      })),
    ],
    subCellRows: def?.item
      ? buildVerticalCellRowsRecursive(EnsureMaybe(def?.item?.map((x) => EnsureMaybe(x))), records)
      : [],
  })) ?? []

const findQuestionnaireResponseAnswerValue = (id: string, items: Maybe<Maybe<QuestionnaireResponseItem>>[]): string => {
  const answerItem = findAnswerByLinkIdRecursive(id, items)
  return answerItem ? EnsureMaybe<string>(answerItem?.answer?.find((x) => !!x)?.valueString, '') : ''
}

const findAnswerByLinkIdRecursive = (
  id: string,
  items: Maybe<Maybe<QuestionnaireResponseItem>>[]
): QuestionnaireResponseItem | undefined => {
  let itemFound: QuestionnaireResponseItem | undefined

  for (let i = 0; i < items.length; i++) {
    const item = EnsureMaybe(items[i])

    if (item.linkId === id) {
      itemFound = item
      break
    }

    const defaultAnswer = EnsureMaybe(EnsureMaybe(item.answer).find((x) => !!x))

    if (defaultAnswer && defaultAnswer.item && defaultAnswer.item.length > 0) {
      itemFound = findAnswerByLinkIdRecursive(id, defaultAnswer.item)
      if (itemFound) {
        break
      }
    }
  }

  return itemFound
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

const mapQuestionnaireResponsesIntoCellRow = (records: QuestionnaireResponse[]): CellRow[] =>
  records
    .filter((record) => !!record.item)
    .map((record) => {
      const cellArray: Cell[] = [
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
  records: QuestionnaireResponse[]
): TableData => ({
  headers: [
    {
      header: 'Record Date',
      accessor: 'date',
    },
    ...recursivelyMapQuestionnaireItemsIntoHeaders(definitionItems),
  ],
  rows: mapQuestionnaireResponsesIntoCellRow(records),
})

const QuestionnaireTable: FC<IProps> = ({ definitionItems, records, orientation }) => {
  const tableData = useMemo(() => {
    if (orientation === 'VERTICAL') {
      return mapQuestionnaireObjectsToVerticalTableData(definitionItems, records)
    }
    return mapQuestionnaireObjectsToHorizontalTableData(definitionItems, records)
  }, [orientation, definitionItems, records])

  return <Table tableData={tableData} />
}

interface IProps {
  orientation: SummaryTableViewType
  definitionItems: QuestionnaireItem[]
  records: QuestionnaireResponse[]
}

export default QuestionnaireTable
