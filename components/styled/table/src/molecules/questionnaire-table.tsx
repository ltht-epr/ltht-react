import { FC } from 'react'
import {
  Maybe,
  QuestionnaireItem,
  QuestionnaireResponse,
  KeyStringValuePair,
  SummaryTableViewType,
} from '@ltht-react/types'
import { answerText, partialDateTimeText } from '@ltht-react/utils'
import VerticalTable, { Header, TableData } from '../atoms/vertical'

const MapQuestionnaireObjectsToTableData = (
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

const QuestionnaireTable: FC<IProps> = ({ definitionItems, records, orientation }) => {
  const tableData = MapQuestionnaireObjectsToTableData(definitionItems, records)

  if (orientation === 'HORIZONTAL') {
    // TODO: Render horizontal table post-refactor
    return <VerticalTable tableData={tableData} />
  }

  return <VerticalTable tableData={tableData} />
}

interface IProps {
  orientation: SummaryTableViewType
  definitionItems: Array<Maybe<QuestionnaireItem>>
  records: QuestionnaireResponse[]
}

export default QuestionnaireTable
