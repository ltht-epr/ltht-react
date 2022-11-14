import { CellProps } from './table-cell'

export const DefaultTableOptions = {
  showExpanderColumn: false,
  pageSize: 10,
  enablePagination: false,
  serverSidePagination: false,
  hidePaginationControls: false,
  hidePerPageOptions: false,
}

export const DefaultPerPageOptions = [10, 20, 30, 40, 50]

export type DataEntity = Record<string, CellProps | DataEntity[]> & {
  subRows?: DataEntity[]
}

export interface Header {
  type: 'accessor' | 'group' | 'display'
  id: string
  cellProps: CellProps
  subHeaders?: Header[]
}

export interface TableData {
  headers: Header[]
  rows: DataEntity[]
}

export interface TableOptions {
  showExpanderColumn?: boolean
  pageSize?: number
  perPageOptions?: number[]
  enablePagination?: boolean
  serverSidePagination?: boolean
  hidePaginationControls?: boolean
  hidePerPageOptions?: boolean
}
