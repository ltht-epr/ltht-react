import { Axis } from '@ltht-react/types'
import { FC } from 'react'
import Table, { ICellProps, TableData, ITableOptions, IFetchDataOptions, IPaginatedResult } from '../molecules/table'

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

const GenericTable = <TColumn, TRow>({
  columnData,
  rowData,
  headerAxis = 'x',
  mapToTableData,
  ...props
}: IProps<TColumn, TRow>) => {
  const tableData = mapToTableData(columnData, rowData)

  return headerAxis === 'y' ? (
    <Table tableData={prepareTableDataForCellCustomisation(tableData)} {...props} />
  ) : (
    <Table tableData={tableData} {...props} />
  )
}

interface IProps<TColumn, TRow> {
  headerAxis?: Axis
  columnData: TColumn
  rowData: TRow
  mapToTableData: (colData: TColumn, rowData: TRow) => TableData
  tableOptions?: ITableOptions
  fetchData?: (options: IFetchDataOptions) => Promise<IPaginatedResult>
}

export default GenericTable
