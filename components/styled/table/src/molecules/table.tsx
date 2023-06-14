import { FC, useEffect, useMemo, useRef, useState } from 'react'
import {
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel,
  getSortedRowModel,
  ExpandedState,
  SortingState,
  PaginationState,
  ColumnDef,
} from '@tanstack/react-table'
import { Axis } from '@ltht-react/types'
import { ScrollableContainer } from './table-styled-components'
import useScrollRef from './useScrollRef'
import {
  handleDataUpdate,
  handleDataUpdateForManualPagination,
  handleScrollEvent,
  handleScrollEventManual,
} from './table-methods'
import TableComponent, { TableNavigationButton, TableSpinner } from './table-component'
import { CellProps } from './table-cell'

const Table: FC<IProps> = ({
  tableData,
  staticColumns = 0,
  currentPage = 1,
  pageSize: pageSizeParam = 10,
  headerAxis = 'x',
  manualPagination = false,
  getCanNextPage = () => false,
  nextPage = () => null,
  isFetching = false,
  keepPreviousData = false,
  maxHeight,
  maxWidth,
}) => {
  const scrollableDivElement = useRef(null)
  const scrollState = useScrollRef(scrollableDivElement)

  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: currentPage - 1,
    pageSize: pageSizeParam,
  })

  const pagination = useMemo(() => ({ pageIndex, pageSize }), [pageIndex, pageSize])
  const [data, setData] = useState<DataEntity[]>([])
  const [columns, setColumns] = useState<ColumnDef<DataEntity>[]>([])
  const [pageCount, setPageCount] = useState<number>(-1)

  useEffect(() => {
    if (!manualPagination) {
      handleDataUpdate(tableData, pageIndex, pageSize, headerAxis, setColumns, setData, setPageCount)
    }
  }, [pageIndex, pageSize, headerAxis, tableData, manualPagination])

  useEffect(() => {
    if (manualPagination) {
      handleDataUpdateForManualPagination(tableData, headerAxis, keepPreviousData, setColumns, setData)
    }
  }, [headerAxis, tableData, manualPagination, keepPreviousData])

  const table = useReactTable({
    data,
    columns,
    ...(!manualPagination ? { pageCount } : {}),
    state: {
      expanded,
      sorting,
      ...(!manualPagination ? { pagination } : {}),
    },
    manualPagination: true,
    onExpandedChange: setExpanded,
    onSortingChange: setSorting,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...(!manualPagination ? { onPaginationChange: setPagination } : {}),
  })

  useEffect(() => {
    if (!scrollState) {
      return
    }

    if (manualPagination && !isFetching) {
      handleScrollEventManual(getCanNextPage, nextPage, headerAxis, scrollState)
    }
  }, [scrollState, headerAxis, manualPagination, isFetching, getCanNextPage, nextPage])

  useEffect(() => {
    if (!scrollState) {
      return
    }

    if (!manualPagination) {
      handleScrollEvent(table, headerAxis, scrollState)
    }
  }, [scrollState, table, headerAxis, manualPagination])

  const getNextPage = () => {
    if (manualPagination) {
      nextPage()
    } else {
      table.nextPage()
    }
  }

  return (
    <ScrollableContainer ref={scrollableDivElement} tableHeaderAxis={headerAxis} {...{ maxHeight, maxWidth }}>
      <TableComponent table={table} staticColumns={staticColumns} headerAxis={headerAxis} />
      {manualPagination ? (
        <TableSpinner position={headerAxis === 'x' ? 'bottom' : 'right'} hidden={!isFetching} />
      ) : null}
      <TableNavigationButton
        position={headerAxis === 'x' ? 'bottom' : 'right'}
        hidden={isFetching || (manualPagination ? !getCanNextPage() : !table.getCanNextPage())}
        clickHandler={getNextPage}
      />
    </ScrollableContainer>
  )
}

interface IProps extends IPaginationProps, ITableDimensionProps {
  tableData: TableData
  staticColumns?: 0 | 1 | 2
  headerAxis?: Axis
}

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

type DataEntity = Record<string, CellProps | DataEntity[]> & {
  subRows?: DataEntity[]
}

interface Header {
  type: 'accessor' | 'group' | 'display'
  id: string
  cellProps: CellProps
  subHeaders?: Header[]
}

interface TableData {
  headers: Header[]
  rows: DataEntity[]
}

export default Table
export { DataEntity, CellProps, Header, TableData }
