import { useState, useEffect, useMemo } from 'react'
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  ExpandedState,
  getExpandedRowModel,
  getSortedRowModel,
  SortingState,
  PaginationState,
} from '@tanstack/react-table'
import { Container, StyledTable, ScrollableContainer } from './table-styles'
import PaginationControls from './pagination-controls'
import {
  buildTableBody,
  buildTableHead,
  CellData,
  DataRow,
  generateColumnsFromHeadersRecursively,
  generateRowsFromCellRows,
  IFetchDataOptions,
  IPaginatedResult,
  ITableOptions,
  TableData,
} from './table-core'
import { Icon, IconButton } from '@ltht-react/icon'

const ServerSidePaginatedTable = ({ tableOptions, fetchData }: IServerSidePaginatedTableProps) => {
  const [columns, setColumns] = useState<ColumnDef<DataRow, CellData | unknown>[]>([])
  const [data, setData] = useState<DataRow[]>([])
  const [tableData, setTableDataState] = useState<TableData>({ headers: [], rows: [] })
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [pageCount, setPageCount] = useState<number>(-1)
  const [fetchState, setFetchState] = useState<IFetchState>({
    isFetching: false,
    isError: false,
    error: '',
  })
  const [refetch, setRefetch] = useState<boolean>(false)
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: tableOptions?.pageSize ?? 10,
  })

  const showExpanderColumn = tableOptions?.showExpanderColumn ?? false

  if (!fetchData) {
    throw new Error('`fetchData` not provided!')
  }

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  useEffect(() => {
    const fetch = async (options: IFetchDataOptions) => {
      const fetchResult = await fetchData(options)
      setFetchState({ isFetching: false, isError: false, error: '' })
      setRefetch(false)
      setTableDataState(fetchResult.tableData ?? { headers: [], rows: [] })
      setPageCount(Math.ceil((fetchResult.totalCount ?? 0) / pageSize))
    }

    setFetchState({ isFetching: true, isError: false, error: '' })
    fetch(pagination).catch((e: Error) => {
      setFetchState({ isFetching: false, isError: true, error: e.message })
      setRefetch(false)
      console.error(e)
    })
  }, [pagination, pageSize, refetch])

  useEffect(() => {
    setColumns(generateColumnsFromHeadersRecursively(tableData.headers ?? [], showExpanderColumn))
    setData(generateRowsFromCellRows(tableData.rows ?? []))
  }, [tableData, showExpanderColumn])

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
        <div style={{ padding: 10, borderRadius: 10 }}>
          <Icon type="exclamation" size="medium" style={{ color: '#DA291C', marginRight: 5 }} />
          {fetchState.error}
          <IconButton
            iconProps={{ type: 'spinner', size: 'small', animate: false }}
            text="reload"
            onClick={() => setRefetch(true)}
            style={{ border: '1px solid black', marginLeft: 5 }}
          />
        </div>
      ) : (
        <>
          <ScrollableContainer>
            <StyledTable>
              {buildTableHead(table)}
              {buildTableBody(table)}
            </StyledTable>
          </ScrollableContainer>
          {!(tableOptions.hidePaginationControls ?? false) ? (
            <PaginationControls
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

interface IServerSidePaginatedTableProps {
  fetchData?: (options: IFetchDataOptions) => Promise<IPaginatedResult>
  tableOptions: ITableOptions
}

interface IFetchState {
  isFetching: boolean
  isError: boolean
  error: string
}

export default ServerSidePaginatedTable
