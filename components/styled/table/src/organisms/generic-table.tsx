import Table from '../molecules/table'
import { TableData } from '../molecules/table-core'

const GenericTable = <TColumn, TRow>({ columnData, rowData, mapToTableData }: IProps<TColumn, TRow>) => {
  const tableData = mapToTableData(columnData, rowData)

  return <Table tableData={tableData} />
}

interface IProps<TColumn, TRow> {
  columnData: TColumn
  rowData: TRow
  mapToTableData: (colData: TColumn, rowData: TRow) => TableData
}

export default GenericTable
