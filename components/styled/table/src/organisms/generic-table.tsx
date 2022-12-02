import { Axis } from '@ltht-react/types'
import Table, { TableData } from '../molecules/table'

const GenericTable = <TColumn, TRow>({
  columnData,
  rowData,
  mapToTableData,
  headerAxis = 'x',
  pageSize = 10,
  currentPage = 1,
  keepPreviousData = true,
  ...props
}: IProps<TColumn, TRow>) => {
  const tableData = mapToTableData(columnData, rowData)

  return (
    <Table
      tableData={tableData}
      headerAxis={headerAxis}
      pageSize={pageSize}
      currentPage={currentPage}
      keepPreviousData={keepPreviousData}
      {...props}
    />
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
  isFetching?: boolean
  keepPreviousData?: boolean
}

export default GenericTable
