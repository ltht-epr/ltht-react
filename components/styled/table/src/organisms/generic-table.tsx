import { Axis } from '@ltht-react/types'
import Table from '../molecules/table'
import { IPaginationProps, ITableDimensionProps, TableData } from '../molecules/table-core'

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

interface IProps<TColumn, TRow> extends IPaginationProps, ITableDimensionProps {
  columnData: TColumn
  rowData: TRow
  mapToTableData: (colData: TColumn, rowData: TRow) => TableData
  headerAxis?: Axis
}

export default GenericTable
