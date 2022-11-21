import { FC } from 'react'
import { Axis } from '@ltht-react/types'
import InfiniteScrollManualPaginatedTable from './infinite-scroll-manual-paginated-table'
import InfiniteScrollAutoPaginatedTable from './infinite-scroll-auto-paginated-table'
import { TableData } from './table-core'

const Table: FC<IProps> = ({
  tableData,
  staticColumns = 0,
  currentPage = 1,
  pageSize = 10,
  headerAxis = 'x',
  manualPagination = false,
  getCanNextPage = () => false,
  nextPage = () => null,
}) =>
  manualPagination ? (
    <InfiniteScrollManualPaginatedTable
      tableData={tableData}
      staticColumns={staticColumns}
      headerAxis={headerAxis}
      getCanNextPage={getCanNextPage}
      nextPage={nextPage}
    />
  ) : (
    <InfiniteScrollAutoPaginatedTable
      tableData={tableData}
      staticColumns={staticColumns}
      pageSize={pageSize}
      currentPage={currentPage}
      headerAxis={headerAxis}
    />
  )

interface IProps {
  tableData: TableData
  staticColumns?: 0 | 1 | 2
  currentPage?: number
  pageSize?: number
  headerAxis?: Axis
  manualPagination?: boolean
  nextPage?: () => void
  getCanNextPage?: () => boolean
}

export default Table
