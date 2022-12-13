import { CellProps } from './table-cell'

export interface IPaginationProps {
  currentPage?: number
  pageSize?: number
  manualPagination?: boolean
  nextPage?: () => void
  getCanNextPage?: () => boolean
  isFetching?: boolean
  keepPreviousData?: boolean
}

export interface ITableDimensionProps {
  maxWidth?: string
  maxHeight?: string
}

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
