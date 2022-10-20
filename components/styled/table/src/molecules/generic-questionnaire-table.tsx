import { QuestionnaireItem, QuestionnaireResponse } from '@ltht-react/types'
import { FC } from 'react'
import Table, { TableData } from '../atoms/table'

const GenericQuestionnaireTable: FC<IProps> = ({ definitionItems, records, mapToTableData }) => (
  <Table columnData={definitionItems} rowData={records} mapToTableData={mapToTableData} />
)
interface IProps {
  definitionItems: QuestionnaireItem[]
  records: QuestionnaireResponse[]
  mapToTableData: (definitionItems: QuestionnaireItem[], records: QuestionnaireResponse[]) => TableData
}

export default GenericQuestionnaireTable
