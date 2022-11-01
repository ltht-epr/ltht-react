import { CheckboxIcon, SquareIcon } from '@ltht-react/icon'
import {
  Axis,
  Maybe,
  Questionnaire,
  QuestionnaireItem,
  QuestionnaireResponse,
  QuestionnaireResponseItem,
  QuestionnaireResponseItemAnswer,
} from '@ltht-react/types'
import { EnsureMaybe, EnsureMaybeArray, partialDateTimeText } from '@ltht-react/utils'
import { Cell, CellRow, Header, TableData } from '../molecules/table'

export const mapQuestionnaireDefinitionAndResponsesToTableData = (
  definition: Questionnaire,
  questionnaireResponses: QuestionnaireResponse[],
  axis: Axis
): TableData | undefined => {
  const definitionItems = EnsureMaybeArray<QuestionnaireItem>(
    EnsureMaybe<Maybe<QuestionnaireItem>[]>(definition.item, [])
  )

  if (definitionItems.length === 0) {
    return undefined
  }

  if (axis === 'y') {
    return mapQuestionnaireObjectsToVerticalTableData(definitionItems, questionnaireResponses)
  }
  return mapQuestionnaireObjectsToHorizontalTableData(definitionItems, questionnaireResponses)
}

const mapQuestionnaireObjectsToHorizontalTableData = (
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

const mapQuestionnaireObjectsToVerticalTableData = (
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

const recursivelyMapQuestionnaireItemsIntoHeaders = (questionnaireItems: QuestionnaireItem[]): Header[] =>
  questionnaireItems.map((questionnaireItem) => {
    const recursiveItems = EnsureMaybeArray<QuestionnaireItem>(questionnaireItem.item ?? [])

    return {
      header: questionnaireItem?.text ?? '',
      accessor: recursiveItems.length > 0 ? '' : questionnaireItem?.linkId ?? '',
      subheaders: recursiveItems.length > 0 ? recursivelyMapQuestionnaireItemsIntoHeaders(recursiveItems) : undefined,
    }
  })

const buildVerticalCellRowsRecursive = (
  definitionItems: QuestionnaireItem[],
  records: QuestionnaireResponse[]
): CellRow[] =>
  definitionItems.map((definitionItem) => {
    const buildRow = (definitionLinkId: string, def: QuestionnaireItem) => {
      const containsSubRows = def?.item && def?.item.length > 0
      const subRows = containsSubRows
        ? buildVerticalCellRowsRecursive(EnsureMaybe(def?.item?.map((x) => EnsureMaybe(x))), records)
        : []
      const checkIfSubRowsHaveAnyData = (recordId: string, rows: CellRow[]) =>
        rows.some((x) => x.cells.find((y) => y.key === recordId)?.value !== '')

      const getCheckboxIcon = (subRowsHaveData: boolean) =>
        subRowsHaveData ? <CheckboxIcon size="medium" /> : <SquareIcon size="small" />

      return {
        id: definitionLinkId,
        cells: [
          {
            key: 'property',
            value: <div>{def?.text ?? ''}</div>,
          },
          ...records.map((record) => ({
            key: record.id,
            value: containsSubRows
              ? getCheckboxIcon(checkIfSubRowsHaveAnyData(record.id, subRows))
              : findQuestionnaireResponseAnswerValue(definitionLinkId, record?.item ?? []),
          })),
        ],
        subRows,
      }
    }

    const id: string = definitionItem?.linkId ?? ''
    return buildRow(id, definitionItem)
  }) ?? []

const findQuestionnaireResponseAnswerValue = (id: string, items: Maybe<Maybe<QuestionnaireResponseItem>>[]): string => {
  const answerItem = findAnswerByLinkIdRecursive(id, items)
  return EnsureMaybe<string>(answerItem?.answer?.find((x) => !!x)?.valueString, '')
}

const findAnswerByLinkIdRecursive = (
  id: string,
  items: Maybe<Maybe<QuestionnaireResponseItem>>[]
): QuestionnaireResponseItem | undefined => {
  let itemFound: QuestionnaireResponseItem | undefined

  if (id === '') {
    return undefined
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i] as QuestionnaireResponseItem

    if (item.linkId === id) {
      itemFound = item
      break
    }

    if (item.answer) {
      const defaultAnswer = item.answer.find((x) => !!x)
      if (defaultAnswer?.item && defaultAnswer?.item.length > 0) {
        itemFound = findAnswerByLinkIdRecursive(id, defaultAnswer.item)
        if (itemFound) {
          break
        }
      }
    }
  }

  return itemFound
}

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
