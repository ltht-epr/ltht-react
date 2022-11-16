import Table from '../molecules/table'
import { PaginationOptions, PaginationResult, TableData, TableOptions } from '../molecules/table-core'

const GenericTable = <TColumn, TRow>({
  columnData,
  rowData,
  mapToTableData,
  fetchData,
  ...props
}: IProps<TColumn, TRow>) => {
  const fetchGenericData = async (options: PaginationOptions): Promise<PaginationResult> => {
    if (!fetchData) {
      throw new Error('`fetchData` funtion not defined for generic table!')
    }
    const data = await fetchData(options)
    return {
      tableData: data
        ? mapToTableData(data.columnData, data.rowData)
        : {
            headers: [],
            rows: [],
          },
      totalCount: data?.totalCount ?? 0,
    }
  }

  const tableData = mapToTableData(columnData, rowData)
  return <Table tableData={tableData} fetchData={fetchGenericData} {...props} />
}

interface IProps<TColumn, TRow> {
  columnData: TColumn
  rowData: TRow
  mapToTableData: (colData: TColumn, rowData: TRow) => TableData
  tableOptions?: TableOptions
  staticColumns?: 0 | 1 | 2
  fetchData?: (options: PaginationOptions) => Promise<{ columnData: TColumn; rowData: TRow; totalCount: number }>
}

export default GenericTable
