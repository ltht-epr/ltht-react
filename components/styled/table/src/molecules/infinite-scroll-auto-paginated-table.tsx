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
import { Icon } from '@ltht-react/icon'
import { Axis } from '@ltht-react/types'
import useDimensionsRef from './useDimensionRef'
import { ScrollableContainer, StyledNextPageButtonContainer, StyledTable } from './table-styled-components'
import useScrollRef from './useScrollRef'
import { DataEntity, TableData, buildTableBody, buildTableHead } from './table-core'
import { createColumns, handleScrollEvent } from './table-methods'

const InfiniteScrollAutoPaginatedTable: FC<IProps> = ({
  tableData,
  staticColumns,
  currentPage,
  pageSize: pageSizeParam,
  headerAxis,
}) => {
  const firstColumn = useRef(null)
  const scrollableDivElement = useRef(null)

  const { width } = useDimensionsRef(firstColumn)
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
    if (headerAxis === 'x') {
      setColumns(createColumns(tableData))
      setData(tableData.rows.slice(0, (pageIndex + 1) * pageSize))
      setPageCount(Math.ceil(tableData.rows.length / pageSize))
    } else {
      const head = tableData.headers[0]
      const tail = tableData.headers.slice(1, tableData.headers.length)
      setColumns(createColumns({ headers: [head, ...tail.slice(0, (pageIndex + 1) * pageSize)], rows: tableData.rows }))
      setData(tableData.rows)
      setPageCount(Math.ceil(tail.length / pageSize))
    }
  }, [pageIndex, pageSize, headerAxis, tableData])

  const table = useReactTable({
    data,
    columns,
    pageCount,
    state: {
      expanded,
      sorting,
      pagination,
    },
    manualPagination: true,
    onExpandedChange: setExpanded,
    onSortingChange: setSorting,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
  })

  useEffect(() => {
    if (!scrollState) {
      return
    }
    handleScrollEvent(table, headerAxis, scrollState)
  }, [scrollState, headerAxis, table])

  return (
    <>
      <ScrollableContainer ref={scrollableDivElement} tableHeaderAxis={headerAxis}>
        <StyledTable>
          {buildTableHead(table, staticColumns, width, firstColumn)}
          {buildTableBody(table, staticColumns, width)}
        </StyledTable>
        <StyledNextPageButtonContainer
          role="button"
          elementPosition={headerAxis === 'x' ? 'bottom' : 'right'}
          onClick={() => table.nextPage()}
          hidden={!table.getCanNextPage()}
        >
          <Icon type="chevron" direction={headerAxis === 'x' ? 'down' : 'right'} size="medium" />
        </StyledNextPageButtonContainer>
      </ScrollableContainer>
    </>
  )
}

interface IProps {
  tableData: TableData
  staticColumns: 0 | 1 | 2
  currentPage: number
  pageSize: number
  headerAxis: Axis
}

export default InfiniteScrollAutoPaginatedTable
