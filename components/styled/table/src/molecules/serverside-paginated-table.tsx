import { FC, useState, useMemo, useEffect, useRef } from 'react'
import {
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel,
  getSortedRowModel,
  ExpandedState,
  SortingState,
  PaginationState,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table'
import createColumns from './table-methods'
import { Container, ScrollableContainer, StyledTable, StyledTableData, StyledTableHeader } from './table-styles'
import { DataEntity, displayErrorMessage, PaginationOptions, PaginationResult, TableOptions } from './table-core'
import TablePaginationControls from './table-pagination-controls'
import useDimensionsRef from './useDimensionRef'

const ServerSidePaginatedTable: FC<IProps> = ({ tableOptions, fetchData, staticColumns }) => {
  if (!fetchData) {
    throw new Error('`fetchData` not provided!')
  }

  const firstColumn = useRef(null)
  const { width } = useDimensionsRef(firstColumn)

  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [data, setData] = useState<DataEntity[]>([])
  const [columns, setColumns] = useState<ColumnDef<DataEntity>[]>([])
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: tableOptions.pageSize ?? 10,
  })
  const [pageCount, setPageCount] = useState<number>(-1)
  const [fetchState, setFetchState] = useState<FetchState>({
    isFetching: false,
    isError: false,
    error: '',
  })

  const [refetch, setRefetch] = useState<boolean>(false)
  const pagination = useMemo(() => ({ pageIndex, pageSize }), [pageIndex, pageSize])

  useEffect(() => {
    const fetch = async (options: PaginationOptions) => {
      const fetchResult = await fetchData(options)
      const tableData = fetchResult.tableData ?? { headers: [], rows: [] }

      setColumns(createColumns(tableData))
      setData(tableData.rows)
      setPageCount(Math.ceil((fetchResult.totalCount ?? 0) / pageSize))
    }

    setFetchState({ isFetching: true, isError: false, error: '' })
    fetch(pagination)
      .then(() => {
        setFetchState({ isFetching: false, isError: false, error: '' })
        setRefetch(false)
      })
      .catch((e: Error) => {
        setFetchState({ isFetching: false, isError: true, error: e.message })
        setRefetch(false)
      })
  }, [pagination, pageIndex, pageSize, refetch, fetchData])

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
    onPaginationChange: setPagination,
    onExpandedChange: setExpanded,
    onSortingChange: setSorting,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const calculateStaticColumnOffset = (cellIdx: number, staticColumns: number, firstColumnWidth: number) => {
    if (cellIdx === 0) {
      return 0
    }

    if (cellIdx < staticColumns) {
      return firstColumnWidth
    }

    return undefined
  }

  return (
    <Container>
      {fetchState.isError ? (
        displayErrorMessage(fetchState.error, setRefetch)
      ) : (
        <>
          <ScrollableContainer>
            <StyledTable role="table">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header, headerIndex) =>
                      headerIndex === 0 ? (
                        <StyledTableHeader
                          stickyWidth={calculateStaticColumnOffset(headerIndex, staticColumns, width)}
                          key={header.id}
                          colSpan={header.colSpan}
                          ref={firstColumn}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
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
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
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
          </ScrollableContainer>
          {!(tableOptions.hidePaginationControls ?? false) ? (
            <TablePaginationControls
              table={table}
              isFetching={fetchState.isFetching}
              serverSidePagination
              tableOptions={tableOptions}
            />
          ) : null}
        </>
      )}
    </Container>
  )
}

interface IProps {
  fetchData?: (options: PaginationOptions) => Promise<PaginationResult>
  tableOptions: TableOptions
  staticColumns: 0 | 1 | 2
}

interface FetchState {
  isFetching: boolean
  isError: boolean
  error: string
}

export default ServerSidePaginatedTable
