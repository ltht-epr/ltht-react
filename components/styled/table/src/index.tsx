import Table, { Header, DataEntity, TableData, CellProps } from './molecules/table'
import GenericTable from './organisms/generic-table'
import QuestionnaireTable from './organisms/questionnaire-table'
import { AdminActionsForQuestionnaire } from './organisms/questionnaire-table-methods'

export default Table
export { Header, TableData, DataEntity, CellProps, GenericTable, QuestionnaireTable, AdminActionsForQuestionnaire }
export { default as mapQuestionnaireToTableData } from './organisms/questionnaire-table-methods'
