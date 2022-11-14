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
import { DataEntity, Header, TableData } from '../molecules/table'
import { CellProps } from '../molecules/table-cell'

const mapQuestionnaireDefinitionAndResponsesToTableData = (
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
      id: 'date',
      type: 'accessor',
      cellProps: { text: 'Record Date' },
    },
    ...recursivelyMapQuestionnaireItemsIntoHeaders(definitionItems),
  ],
  rows: mapQuestionnaireResponsesIntoDataEntities(records),
})

const recursivelyMapQuestionnaireItemsIntoHeaders = (questionnaireItems: QuestionnaireItem[]): Header[] =>
  questionnaireItems.map((questionnaireItem) => {
    const subItems = EnsureMaybeArray<QuestionnaireItem>(questionnaireItem.item ?? [])

    return {
      id: questionnaireItem?.linkId ?? '',
      type: subItems.length > 0 ? 'group' : 'accessor',
      cellProps: { text: questionnaireItem?.text ?? '' },
      subHeaders: recursivelyMapQuestionnaireItemsIntoHeaders(subItems),
    }
  })

const mapQuestionnaireResponsesIntoDataEntities = (records: QuestionnaireResponse[]): DataEntity[] =>
  records
    .filter((record) => !!record.item)
    .map((record) => {
      let dataEntity: DataEntity = {}
      dataEntity.date = { text: partialDateTimeText(record.authored) }

      record.item
        ?.filter((item) => item?.linkId && item?.answer)
        .forEach((item) => {
          const linkId = EnsureMaybe<string>(item?.linkId)
          const answer = EnsureMaybe<QuestionnaireResponseItemAnswer>(item?.answer?.find((answer) => !!answer))

          dataEntity[linkId] = { text: EnsureMaybe<string>(answer.valueString, '') }

          if (answer.item) {
            dataEntity = recursivelyMapResponseItemsOntoData(
              EnsureMaybeArray<QuestionnaireResponseItem>(answer.item),
              dataEntity
            )
          }
        })

      return dataEntity
    })

const recursivelyMapResponseItemsOntoData = (
  items: QuestionnaireResponseItem[],
  dataEntity: DataEntity
): DataEntity => {
  items.forEach((item) => {
    const firstAnswer = item.answer ? item.answer[0] : undefined

    if (item.linkId && firstAnswer) {
      // Always push item's linkId with first answer
      dataEntity[item.linkId] = {
        text: EnsureMaybe<string>(firstAnswer.valueString, ''),
      }

      // If first answer has subitems, recurse through them and do the same
      if (firstAnswer.item) {
        dataEntity = recursivelyMapResponseItemsOntoData(
          EnsureMaybeArray<QuestionnaireResponseItem>(firstAnswer.item),
          dataEntity
        )
      }
    }
  })
  return dataEntity
}

const mapQuestionnaireObjectsToVerticalTableData = (
  definitionItems: Array<QuestionnaireItem>,
  records: QuestionnaireResponse[]
): TableData => ({
  headers: [
    {
      id: 'property',
      type: 'accessor',
      cellProps: { text: '' },
    },
    ...records.map(
      (record): Header => ({
        id: record?.id ?? '',
        type: 'accessor',
        cellProps: { text: partialDateTimeText(record.authored) ?? '' },
      })
    ),
  ],
  rows: buildVerticalCellRows(definitionItems, records),
})

const buildVerticalCellRows = (
  definitionItems: QuestionnaireItem[],
  records: QuestionnaireResponse[]
): DataEntity[] => {
  const foo = definitionItems.map((item) => {
    let dataEntity: DataEntity = {}

    dataEntity = buildVerticalCellRowsRecursive(
      EnsureMaybeArray<QuestionnaireItem>([item]),
      records,
      dataEntity
    )

    return dataEntity
  })

  return foo
}

const buildVerticalCellRowsRecursive = (
  definitionItems: QuestionnaireItem[],
  records: QuestionnaireResponse[],
  dataEntity: DataEntity
): DataEntity => {
  definitionItems.forEach((definitionItem) => {
    dataEntity.property = { text: definitionItem.text ?? '' }

    if (definitionItem.linkId) {
      records.forEach((record, recordIndex) => {
        dataEntity = getRecordItemByLinkId(
          EnsureMaybeArray<QuestionnaireResponseItem>(record.item ?? []),
          EnsureMaybe<string>(definitionItem.linkId),
          dataEntity,
          recordIndex
        )
      })
    }

    if (definitionItem.item && definitionItem.item.length > 0) {
      dataEntity.subRows = buildVerticalCellRows(EnsureMaybeArray<QuestionnaireItem>(definitionItem.item), records)
    }
  })

  return dataEntity
}

const getRecordItemByLinkId = (
  recordItems: QuestionnaireResponseItem[],
  linkId: string,
  dataEntity: DataEntity,
  recordIndex: number
) => {
  recordItems.forEach((recordItem) => {
    const recordItemAnswer =
      recordItem.answer && recordItem.answer.length > 0 ? EnsureMaybe(recordItem.answer[0]) : undefined

    if (recordItemAnswer) {
      if (recordItem?.linkId && recordItem?.linkId === linkId) {
        dataEntity[recordIndex + 1] = createCellPropsForAnswer(recordItemAnswer)
      }
      if (recordItemAnswer.item && recordItemAnswer.item.length > 0) {
        dataEntity = getRecordItemByLinkId(
          EnsureMaybeArray<QuestionnaireResponseItem>(recordItemAnswer.item),
          linkId,
          dataEntity,
          recordIndex
        )
      }
    }
  })

  return dataEntity
}

const createCellPropsForAnswer = (answer: QuestionnaireResponseItemAnswer): CellProps => {
  if (answer.valueString) {
    if (answer.valueString === 'CHECKBOX') {
      return {
        iconProps: { type: 'checkbox', size: 'medium' },
      }
    }
    return {
      text: answer.valueString,
    }
  }
  return {
    text: '',
  }
}

export default mapQuestionnaireDefinitionAndResponsesToTableData
