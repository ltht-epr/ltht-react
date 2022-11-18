import { Axis } from '@ltht-react/types'
import Table, { TableData } from '../molecules/table'

const GenericTable = <TColumn, TRow>({
  columnData,
  rowData,
  mapToTableData,
  headerAxis = 'x',
}: IProps<TColumn, TRow>) => {
  const tableData = mapToTableData(columnData, rowData)

  return <Table tableData={tableData} headerAxis={headerAxis} />
}

interface IProps<TColumn, TRow> {
  columnData: TColumn
  rowData: TRow
  mapToTableData: (colData: TColumn, rowData: TRow) => TableData
  headerAxis?: Axis
}

export default GenericTable
