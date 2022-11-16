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
} from '@tanstack/react-table'
import { createColumns } from './table-methods'
import { Container, ScrollableContainer, StyledTable } from './table-styles'
import {
  buildTableBody,
  buildTableHead,
  DataEntity,
  displayErrorMessage,
  PaginationOptions,
  PaginationResult,
  TableOptions,
} from './table-core'
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

  return (
    <Container>
      {fetchState.isError ? (
        displayErrorMessage(fetchState.error, setRefetch)
      ) : (
        <>
          <ScrollableContainer>
            <StyledTable role="table">
              {buildTableHead(table, staticColumns, firstColumn, width)}
              {buildTableBody(table, staticColumns, width)}
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
