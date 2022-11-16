import { Icon } from '@ltht-react/icon'
import { FC } from 'react'
import ServerSidePaginatedTable from './serverside-paginated-table'
import StandardTable from './standard-table'

import { DefaultTableOptions, PaginationOptions, PaginationResult, TableData, TableOptions } from './table-core'

const Table: FC<IProps> = ({ fetchData, tableData, staticColumns = 0, tableOptions = DefaultTableOptions }: IProps) => {
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
    <ServerSidePaginatedTable fetchData={fetchData} tableOptions={tableOptions} staticColumns={staticColumns} />
  ) : (
    <StandardTable
      tableData={tableData ?? { headers: [], rows: [] }}
      tableOptions={tableOptions}
      staticColumns={staticColumns}
    />
  )
}

interface IProps {
  staticColumns?: 0 | 1 | 2
  tableData?: TableData
  fetchData?: (options: PaginationOptions) => Promise<PaginationResult>
  tableOptions?: TableOptions
}

export default Table
