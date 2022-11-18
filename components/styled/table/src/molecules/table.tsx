import { FC, useEffect, useMemo, useRef, useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel,
  getSortedRowModel,
  ExpandedState,
  SortingState,
  PaginationState,
  ColumnDef,
} from '@tanstack/react-table'
import { TABLE_COLOURS } from '@ltht-react/styles'
import { CellProps } from './table-cell'
import createColumns from './table-methods'
import useDimensionsRef from './useDimensionRef'
import {
  ScrollableContainer,
  StyledNextPageButtonContainer,
  StyledTable,
  StyledTableData,
  StyledTableHeader,
} from './table-styled-components'
import { Icon } from '@ltht-react/icon'
import { Axis } from '@ltht-react/types'
import useScrollRef from './useScrollRef'

const Table: FC<IProps> = ({
  tableData,
  staticColumns = 0,
  currentPage = 0,
  pageSize: pageSizeParam = 10,
  headerAxis = 'x',
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
  }, [pagination])

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

  const calculateStaticColumnOffset = (cellIdx: number, staticColumns: number, firstColumnWidth: number) => {
    if (staticColumns === 0) {
      return undefined
    }

    if (cellIdx === 0) {
      return 0
    }

    if (cellIdx < staticColumns) {
      return firstColumnWidth
    }

    return undefined
  }

  useEffect(() => {
    if (!scrollState) {
      return
    }

    const { scrollWidth, scrollHeight, currentXScroll, currentYScroll } = scrollState
    if (
      headerAxis === 'x' &&
      currentYScroll > scrollHeight - 20 &&
      currentYScroll < scrollHeight + 20 &&
      table.getCanNextPage()
    ) {
      table.nextPage()
    }

    if (
      headerAxis === 'y' &&
      currentXScroll > scrollWidth - 20 &&
      currentXScroll < scrollWidth + 20 &&
      table.getCanNextPage()
    ) {
      table.nextPage()
    }
  }, [scrollState])

  return (
    <>
      <ScrollableContainer ref={scrollableDivElement} tableHeaderAxis={headerAxis}>
        <StyledTable>
          <thead style={{ position: 'sticky', left: 0, top: 0, zIndex: 2 }}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, headerIndex) =>
                  header.column.id === 'expander' ? (
                    <StyledTableHeader
                      stickyWidth={calculateStaticColumnOffset(headerIndex, staticColumns, width)}
                      key={header.id}
                      colSpan={header.colSpan}
                      ref={firstColumn}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </StyledTableHeader>
                  ) : (
                    <StyledTableHeader
                      stickyWidth={calculateStaticColumnOffset(headerIndex, staticColumns, width)}
                      key={header.id}
                      colSpan={header.colSpan}
                      {...{
                        style: {
                          cursor: header.column.getCanSort() ? 'pointer' : '',
                        },
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </StyledTableHeader>
                  )
                )}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell, cellIdx) => (
                  <StyledTableData
                    stickyWidth={calculateStaticColumnOffset(cellIdx, staticColumns, width)}
                    key={cell.id}
                    style={{
                      background: cellIdx % 2 === 1 ? TABLE_COLOURS.STRIPE_LIGHT : TABLE_COLOURS.STRIPE_DARK,
                      textAlign: 'center',
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledTableData>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
        <StyledNextPageButtonContainer
          elementPosition={headerAxis === 'x' ? 'bottom' : 'right'}
          onClick={() => table.nextPage()}
          hidden={!table.getCanNextPage()}
        >
          <Icon type="chevron" direction={headerAxis === 'x' ? 'down' : 'right'} size="medium" title="Load More" />
        </StyledNextPageButtonContainer>
      </ScrollableContainer>
    </>
  )
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

interface IProps {
  tableData: TableData
  staticColumns?: 0 | 1 | 2
  currentPage?: number
  pageSize?: number
  headerAxis?: Axis
}

export default Table
