import { useState, useEffect, useMemo } from 'react'
import { useQuery } from 'react-query'
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

const ServerSidePaginatedTable = ({ tableOptions, fetchData }: IServerSidePaginatedTableProps): JSX.Element => {
  const [columns, setColumns] = useState<ColumnDef<DataRow, CellData | unknown>[]>([])
  const [data, setData] = useState<DataRow[]>([])
  const [tableData, setTableDataState] = useState<TableData>({ headers: [], rows: [] })
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [pageCount, setPageCount] = useState<number>(-1)
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: tableOptions?.pageSize ?? 10,
  })

  const showExpanderColumn = tableOptions?.showExpanderColumn ?? false

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  }

  if (!fetchData) {
    throw new Error('`fetchData` not provided!')
  }

  const dataQuery = useQuery(['data', fetchDataOptions], () => fetchData(fetchDataOptions), {
    keepPreviousData: true,
    refetchOnMount: 'always',
  })

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  useEffect(() => {
    setTableDataState(dataQuery.data?.tableData ?? { headers: [], rows: [] })
    setPageCount(Math.ceil((dataQuery.data?.totalCount ?? 0) / pageSize))
  }, [dataQuery.data, dataQuery.dataUpdatedAt, pageSize])

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
      <ScrollableContainer>
        <StyledTable>
          {buildTableHead(table)}
          {buildTableBody(table)}
        </StyledTable>
      </ScrollableContainer>
      {!(tableOptions.hidePaginationControls ?? false) ? (
        <PaginationControls
          table={table}
          isFetching={dataQuery.isFetching}
          serverSidePagination
          tableOptions={tableOptions}
        />
      ) : null}
    </Container>
  )
}

interface IServerSidePaginatedTableProps {
  fetchData?: (options: IFetchDataOptions) => Promise<IPaginatedResult>
  tableOptions: ITableOptions
}

export default ServerSidePaginatedTable
