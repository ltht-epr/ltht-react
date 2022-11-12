import Table, { ICellProps, Header, Cell, CellRow, TableData, CellData } from './molecules/table'
import GenericTable from './organisms/generic-table'
import QuestionnaireTable from './organisms/questionnaire-table'
import ReFactoredTable, {
  UnknownDataType,
  Header as HeaderRefactored,
  TableData as TableDataRefactored,
} from './molecules/table-rewrite'

export default Table
export { ICellProps, Header, Cell, CellRow, TableData, CellData }
export { GenericTable }
export { QuestionnaireTable }

export { ReFactoredTable, UnknownDataType, HeaderRefactored, TableDataRefactored }
