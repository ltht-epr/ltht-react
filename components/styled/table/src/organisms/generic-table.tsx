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
  fetchData,
  ...props
}: IProps<TColumn, TRow>) => {
  const tableData = mapToTableData(columnData, rowData)

  const fetchGenericData = async (options: IFetchDataOptions): Promise<IPaginatedResult> => {
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

  return headerAxis === 'y' ? (
    <Table tableData={prepareTableDataForCellCustomisation(tableData)} fetchData={fetchGenericData} {...props} />
  ) : (
    <Table tableData={tableData} fetchData={fetchGenericData} {...props} />
  )
}

interface IProps<TColumn, TRow> {
  headerAxis?: Axis
  columnData: TColumn
  rowData: TRow
  mapToTableData: (colData: TColumn, rowData: TRow) => TableData
  tableOptions?: ITableOptions
  fetchData?: (options: IFetchDataOptions) => Promise<{ columnData: TColumn; rowData: TRow; totalCount: number }>
}

export default GenericTable
