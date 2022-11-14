import { Icon } from '@ltht-react/icon'

import StandardTable from './table/standard-table'
import ServerSidePaginatedTable from './table/serverside-paginated-table'
import {
  DefaultTableOptions,
  IFetchDataOptions,
  IPaginatedResult,
  ITableOptions,
  ICellProps,
  Header,
  Cell,
  CellRow,
  TableData,
  CellData,
  DataRow,
} from './table/table-core'

const Table = ({ fetchData, tableData, ...props }: IProps): JSX.Element => {
  let { tableOptions } = props

  if (!tableOptions) {
    tableOptions = DefaultTableOptions
  }

  if (tableOptions.enablePagination && tableOptions.serverSidePagination && !fetchData) {
    return (
      <>
        <Icon type="exclamation" size="large" status="red" />
        <div>Server-side pagination enabled however `fetchData` function property is not provided.</div>
      </>
    )
  }

  if (!tableOptions.serverSidePagination && !tableData) {
    return (
      <>
        <Icon type="exclamation" size="large" status="red" />
        <div>No table data provided.</div>
      </>
    )
  }

  return tableOptions.enablePagination && tableOptions.serverSidePagination ? (
    <ServerSidePaginatedTable fetchData={fetchData} tableOptions={tableOptions} />
  ) : (
    <StandardTable tableData={tableData ?? { headers: [], rows: [] }} tableOptions={tableOptions} />
  )
}

interface IProps {
  tableData?: TableData
  fetchData?: (options: IFetchDataOptions) => Promise<IPaginatedResult>
  tableOptions?: ITableOptions
}

export default Table
export {
  ICellProps,
  Header,
  Cell,
  CellRow,
  TableData,
  CellData,
  DataRow,
  ITableOptions,
  IFetchDataOptions,
  IPaginatedResult,
  DefaultTableOptions,
}
