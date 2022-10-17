import { FC } from 'react'
import {
  Maybe,
  QuestionnaireItem,
  QuestionnaireResponse,
  KeyStringValuePair,
  SummaryTableViewType,
  QuestionnaireResponseItem,
} from '@ltht-react/types'
import { answerText, EnsureMaybeArray, partialDateTimeText } from '@ltht-react/utils'
import Table, { Header, TableData } from '../atoms/table'

const mapQuestionnaireObjectsToVerticalTableData = (
  definitionItems: Array<Maybe<QuestionnaireItem>>,
  records: QuestionnaireResponse[]
): TableData => {
  const columns: Header[] = [
    {
      header: '',
      accessor: 'property',
    },
    ...records.map((record) => ({
      header: partialDateTimeText(record.authored) ?? '',
      accessor: record?.id ?? '',
    })),
  ]

  const questionnaireItems: KeyStringValuePair[] = definitionItems.map((def) => {
    const questionnaireItem: KeyStringValuePair = {
      property: def?.text ?? '',
    }

    const recordsWithMatchingItems = records.filter((record) =>
      record.item?.some((item) => item?.linkId === def?.linkId)
    )

    recordsWithMatchingItems.forEach((record) => {
      const matchingItem = record.item?.find((item) => item?.linkId === def?.linkId)
      const itemValue =
        matchingItem && matchingItem.answer && matchingItem.answer.length > 0 ? answerText(matchingItem?.answer[0]) : ''

      questionnaireItem[record.id] = itemValue ?? ''
    })

    return questionnaireItem
  })

  return {
    headers: columns,
    rows: questionnaireItems,
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

const mapQuestionnaireResponsesIntoKeyValuePairs = (records: QuestionnaireResponse[]): KeyStringValuePair[] =>
  records
    .filter((record) => !!record.item)
    .map((record) => {
      const obj: KeyStringValuePair = {
        date: partialDateTimeText(record.authored),
      }

      EnsureMaybeArray<QuestionnaireResponseItem>(record.item ?? []).forEach((item) => {
        if (!item.linkId || !item.answer || !item.answer[0]) {
          return
        }

        const firstAnswer = item.answer[0]

        const items = recursivelyProcessResponseItems(
          EnsureMaybeArray<QuestionnaireResponseItem>(firstAnswer.item ?? [])
        )
        items.forEach((x) => {
          obj[x.key] = x.value
        })
        obj[item.linkId] = answerText(firstAnswer) ?? ''
      })

      return obj
    })

const recursivelyProcessResponseItems = (items: QuestionnaireResponseItem[]): Tuple[] => {
  const result: Tuple[] = []

  items.forEach((item) => {
    const firstAnswer = item.answer ? item.answer[0] : undefined

    if (item.linkId && firstAnswer) {
      // If there are answers of subsections then recurse
      if (firstAnswer.item) {
        recursivelyProcessResponseItems(EnsureMaybeArray<QuestionnaireResponseItem>(firstAnswer.item)).forEach((x) =>
          result.push(x)
        )
      }

      result.push({
        key: item.linkId,
        value: answerText(firstAnswer) ?? '',
      })
    }
  })

  return result
}

const mapQuestionnaireObjectsToHorizontalTableData = (
  definitionItems: Array<QuestionnaireItem>,
  records: QuestionnaireResponse[]
): TableData => {
  const columns: Header[] = [
    {
      header: 'Record Date',
      accessor: 'date',
    },
    ...recursivelyMapQuestionnaireItemsIntoHeaders(definitionItems),
  ]

  return {
    headers: columns,
    rows: mapQuestionnaireResponsesIntoKeyValuePairs(records),
  }
}

const QuestionnaireTable: FC<IProps> = ({ definitionItems, records, orientation }) => {
  const mappingMethod =
    orientation === 'VERTICAL'
      ? mapQuestionnaireObjectsToVerticalTableData
      : mapQuestionnaireObjectsToHorizontalTableData

  return <Table columnData={definitionItems} rowData={records} mapToTableData={mappingMethod} />
}

interface Tuple {
  key: string
  value: string
}

interface IProps {
  orientation: SummaryTableViewType
  definitionItems: Array<QuestionnaireItem>
  records: QuestionnaireResponse[]
}

export default QuestionnaireTable
