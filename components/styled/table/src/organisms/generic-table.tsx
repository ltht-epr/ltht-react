import { Axis } from '@ltht-react/types'
import Table from '../molecules/table'
import { TableData } from '../molecules/table-core'

const GenericTable = <TColumn, TRow>({
  columnData,
  rowData,
  mapToTableData,
  headerAxis = 'x',
  pageSize = 10,
  currentPage = 1,
  ...props
}: IProps<TColumn, TRow>) => {
  const tableData = mapToTableData(columnData, rowData)

  return (
    <Table tableData={tableData} headerAxis={headerAxis} pageSize={pageSize} currentPage={currentPage} {...props} />
  )
}

interface IProps<TColumn, TRow> {
  columnData: TColumn
  rowData: TRow
  mapToTableData: (colData: TColumn, rowData: TRow) => TableData
  headerAxis?: Axis
  currentPage?: number
  pageSize?: number
  manualPagination?: boolean
  nextPage?: () => void
  getCanNextPage?: () => boolean
}

export default GenericTable
