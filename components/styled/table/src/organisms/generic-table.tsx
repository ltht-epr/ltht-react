import Table, { IPaginationProps, ITableDimensionProps, ITableConfig, TableData } from '../molecules/table'

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

interface IProps<TColumn, TRow> extends ITableConfig, IPaginationProps, ITableDimensionProps {
  id?: string
  columnData: TColumn
  rowData: TRow
  mapToTableData: (colData: TColumn, rowData: TRow) => TableData
}

export default GenericTable
