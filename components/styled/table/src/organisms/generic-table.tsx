import { Axis } from '@ltht-react/types'
import Table, { TableData } from '../molecules/table'

const GenericTable = <TColumn, TRow>({ columnData, rowData, mapToTableData }: IProps<TColumn, TRow>) => {
  const tableData = mapToTableData(columnData, rowData)

  return <Table tableData={tableData} />
}

interface IProps<TColumn, TRow> {
  headerAxis?: Axis
  columnData: TColumn
  rowData: TRow
  mapToTableData: (colData: TColumn, rowData: TRow) => TableData
}

export default GenericTable
