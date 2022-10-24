import { SummaryTableViewType } from '@ltht-react/types'
import { FC } from 'react'
import Table, { ICellProps, TableData } from '../atoms/table'

const prepareTableDataForCellCustomisation = (tableData: TableData) => {
  const data = tableData
  data.headers = tableData.headers.map((header) => ({
    ...header,
    cell: (props: ICellProps) => {
      if (props.columnId !== '') {
        const columnCellRender = (props.row.renderCells as Record<string, FC<ICellProps>>)[props.columnId]
        return columnCellRender ? columnCellRender(props) : (props.row.render as FC<ICellProps>)(props)
      }

      return (props.row.render as FC<ICellProps>)(props)
    },
  }))

  return data
}

const GenericTable = <TColumn, TRow>({ columnData, rowData, orientation, mapToTableData }: IProps<TColumn, TRow>) => {
  const tableData = mapToTableData(columnData, rowData)

  return orientation === 'VERTICAL' ? (
    <Table tableData={prepareTableDataForCellCustomisation(tableData)} />
  ) : (
    <Table tableData={tableData} />
  )
}
interface IProps<TColumn, TRow> {
  orientation: SummaryTableViewType
  columnData: TColumn
  rowData: TRow
  mapToTableData: (colData: TColumn, rowData: TRow) => TableData
}

export default GenericTable