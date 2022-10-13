import { Story } from '@storybook/react'
import Table from '@ltht-react/table'
import {
  KeyStringValuePair,
  Maybe,
  QuestionnaireItem,
  QuestionnaireResponse,
  QuestionnaireResponseItem,
} from '@ltht-react/types'
import { Header, TableData } from '@ltht-react/table/lib/atoms/table'
import { answerText, partialDateTimeText } from '@ltht-react/utils'
import { summaryDefinition, summaryRecordsList } from './table.fixtures'
import { mockSummaryDefinition, mockSummaryRecordsList } from './table.mockdata'

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

interface Tuple {
  key: string
  value: string
}

export const VerticalTable: Story = () => (
  <Table
    columnData={summaryDefinition?.item?.map((x) => x as QuestionnaireItem)}
    rowData={summaryRecordsList}
    mapToTableData={MapQuestionnaireObjectsToVerticalTableData}
  />
)

export const HorizontalTable: Story = () => (
  <Table
    columnData={summaryDefinition?.item?.map((x) => x as QuestionnaireItem)}
    rowData={summaryRecordsList}
    mapToTableData={MapQuestionnaireObjectsToHorizontalTableData}
  />
)
export const MockDataVisualisation: Story = () => (
  <Table columnData={mockSummaryDefinition?.item?.map((x) => x as QuestionnaireItem)} rowData={mockSummaryRecordsList} mapToTableData={MapQuestionnaireObjectsToVerticalTableData}/>
)
export const MockDataVisualisationHorizontal: Story = () => (
  <Table columnData={mockSummaryDefinition?.item?.map((x) => x as QuestionnaireItem)} rowData={mockSummaryRecordsList} mapToTableData={MapQuestionnaireObjectsToHorizontalTableData}/>
)

export default { title: 'UI/Organisms/Table' }
