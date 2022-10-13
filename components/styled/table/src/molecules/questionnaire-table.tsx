import { FC } from 'react'
import {
  Maybe,
  QuestionnaireItem,
  QuestionnaireResponse,
  KeyStringValuePair,
  SummaryTableViewType,
  QuestionnaireResponseItem,
} from '@ltht-react/types'
import { answerText, partialDateTimeText } from '@ltht-react/utils'
import Table, { Header, TableData } from '../atoms/table'

const MapQuestionnaireObjectsToVerticalTableData = (
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

const processColumnItems = (items: Maybe<QuestionnaireItem>[]): Header[] =>
  items.map((item) => {
    if (item?.item?.length && item?.item?.length > 0) {
      return {
        header: item?.text ?? '',
        accessor: '',
        subheaders: processColumnItems(item?.item),
      } as Header
    }
    return {
      header: item?.text ?? '',
      accessor: item?.linkId ?? '',
    }
  })

const processResponse = (records: Maybe<QuestionnaireResponse>[]): KeyStringValuePair[] => {
  const result: KeyStringValuePair[] = []
  records.forEach((record) => {
    if (record?.item) {
      const obj: KeyStringValuePair = {
        date: partialDateTimeText(record.authored),
      }
      for (let index = 0; index < record.item.length; index++) {
        const prop = record.item[index]?.linkId
        const value = record.item[index]?.answer
        if (prop && value) {
          if (value[0]?.item) {
            const items = processResponseItems(value[0]?.item)
            items.forEach((x) => {
              obj[x.key] = x.value
            })
          }
          obj[prop] = answerText(value[0]) ?? ''
        }
      }
      result.push(obj)
    }
  })

  return result
}

const processResponseItems = (items: Maybe<QuestionnaireResponseItem>[]): Tuple[] => {
  const result: Tuple[] = []
  items.forEach((item) => {
    const obj: Tuple = {
      key: '',
      value: '',
    }
    if (item) {
      const prop = item.linkId
      const value = item.answer
      if (prop && value) {
        if (value[0]?.item) {
          const items = processResponseItems(value[0]?.item)
          items.forEach((x) => result.push(x))
        }
        obj.key = prop
        obj.value = answerText(value[0]) ?? ''
      }
    }

    result.push(obj)
  })

  return result
}

const MapQuestionnaireObjectsToHorizontalTableData = (
  definitionItems: Array<Maybe<QuestionnaireItem>>,
  records: QuestionnaireResponse[]
): TableData => {
  const columns: Header[] = [
    {
      header: 'Record Date',
      accessor: 'date',
    },
    ...processColumnItems(definitionItems),
  ]

  const data: KeyStringValuePair[] = processResponse(records)

  return {
    headers: columns,
    rows: data,
  }
}

const QuestionnaireTable: FC<IProps> = ({ definitionItems, records, orientation }) => {
  const mappingMethod =
    orientation === 'VERTICAL'
      ? MapQuestionnaireObjectsToVerticalTableData
      : MapQuestionnaireObjectsToHorizontalTableData

  return <Table columnData={definitionItems} rowData={records} mapToTableData={mappingMethod} />
}

interface Tuple {
  key: string
  value: string
}

interface IProps {
  orientation: SummaryTableViewType
  definitionItems: Array<Maybe<QuestionnaireItem>>
  records: QuestionnaireResponse[]
}

export default QuestionnaireTable
