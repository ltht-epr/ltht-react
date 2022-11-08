import { FC, useState, useEffect, useMemo } from 'react'
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ExpandedState,
  getExpandedRowModel,
  getSortedRowModel,
  SortingState,
  SortDirection,
  PaginationState,
} from '@tanstack/react-table'
import uuid from 'react-uuid'
import styled from '@emotion/styled'
import { CSS_RESET, TRANSLUCENT_BRIGHT_BLUE_TABLE, TRANSLUCENT_MID_GREY, SCROLLBAR } from '@ltht-react/styles'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const Container = styled.div`
  ${CSS_RESET};
  background-color: white;
  border-radius: 6px;
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    border: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: ${SCROLLBAR};
    border-radius: 10px;
  }
`

const StyledTable = styled.table`
  background-color: white;
  border-collapse: collapse;
  border-radius: 6px;
  border: thin solid rgba(200, 200, 200, 0.5);
  padding: 1rem;
`

const StyledTableHeader = styled.th`
  background-color: ${TRANSLUCENT_MID_GREY};
  border: thin solid rgba(200, 200, 200, 0.5);
  font-weight: bold;
  padding: 0.5rem 1rem;
`

const StyledTableData = styled.td`
  border: thin solid rgba(200, 200, 200, 0.5);
  white-space: nowrap;
  &:first-of-type {
    background-color: ${TRANSLUCENT_MID_GREY} !important;
  }
`

const columnHelper = createColumnHelper<DataRow>()
const queryClient = new QueryClient()

const generateColumnsFromHeadersRecursively = (
  headers: Header[],
  showExpanderColumn: boolean
): ColumnDef<DataRow, CellData | unknown>[] => {
  const createColumns = (headers: Header[]): ColumnDef<DataRow, CellData | unknown>[] =>
    headers?.map((header) =>
      header.subheaders
        ? columnHelper.group({
            id: header.id ?? uuid(),
            header: () => header.header,
            columns: createColumns(header.subheaders ?? []),
          })
        : (columnHelper.accessor(header.accessor, {
            id: header.accessor,
            cell: ({ row, ...info }) => {
              const stringValue = (info?.getValue() as string) ?? ''
              const cellContent = header.cell
                ? header.cell({ value: stringValue, columnId: info.column.id, row: row.original })
                : stringValue

              return row.getCanExpand() ? (
                <span onClick={row.getToggleExpandedHandler()} style={{ cursor: 'pointer' }}>
                  {cellContent}
                </span>
              ) : (
                cellContent
              )
            },
            header: () => header.header,
          }) as ColumnDef<DataRow, CellData | unknown>)
    ) ?? []

  const tableColumns = createColumns(headers ?? [])

  return showExpanderColumn ? [getExpanderColumn(), ...tableColumns] : tableColumns
}

const generateRowsFromCellRows = (cellRows: CellRow[]): DataRow[] =>
  cellRows.map((cellRow) => {
    const mappedCell: DataRow = { subRows: [] }
    const mappedCellRender: Record<string, FC<ICellProps>> = {}

    cellRow.cells.forEach((cell) => {
      mappedCell[cell.key] = cell.value
      if (cell.render) {
        mappedCellRender[cell.key] = cell.render
      }
    })

    return {
      ...mappedCell,
      ...{
        rowId: cellRow.id ?? '',
        render: cellRow.render ? cellRow.render : (props: ICellProps) => <>{props.value}</>,
        renderCells: mappedCellRender,
      },
      subRows: generateRowsFromCellRows(cellRow.subRows ?? []),
    }
  })

const getExpanderColumn = (): ColumnDef<DataRow, CellData | unknown> =>
  columnHelper.accessor('expander', {
    header: ({ table }) => (
      <span
        title="Toggle All Rows Expanded"
        onClick={table.getToggleAllRowsExpandedHandler()}
        style={{ cursor: 'pointer' }}
      >
        {table.getIsAllRowsExpanded() ? '▲' : '►'}
      </span>
    ),
    cell: ({ row }) =>
      row.getCanExpand() ? (
        <span
          {...{
            onClick: row.getToggleExpandedHandler(),
            style: { cursor: 'pointer', paddingLeft: `${row.depth * 2}rem` },
          }}
        >
          {row.getIsExpanded() ? '▲' : '►'}
        </span>
      ) : null,
  }) as ColumnDef<DataRow, CellData | unknown>

function PaginatedTable({ tableData, tableOptions, fetchData }: IProps): JSX.Element {
  const [columns, setColumns] = useState<ColumnDef<DataRow, CellData | unknown>[]>([])
  const [data, setData] = useState<DataRow[]>([])
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [pageCount, setPageCount] = useState<number>(-1)
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: tableOptions?.pageSize ?? 10,
  })

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  }

  const dataQuery = useQuery(['data', fetchDataOptions], () => fetchData(fetchDataOptions), {
    keepPreviousData: true,
  })

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  useEffect(() => {
    let dataRows = dataQuery.data?.tableData?.rows ?? []
    let dataColumns = dataQuery.data?.tableData.headers ?? []

    if (dataColumns.length > 0) {
      setColumns(generateColumnsFromHeadersRecursively(dataColumns, tableOptions?.showExpanderColumn ?? true))
    }

    if (dataRows.length > 0) {
      setPageCount(Math.ceil((dataQuery.data?.totalCount ?? 0) / pageSize))
      setData(generateRowsFromCellRows(dataRows))
    }
  }, [dataQuery.data, dataQuery.dataUpdatedAt])

  useEffect(() => {
    setColumns(generateColumnsFromHeadersRecursively(tableData.headers ?? [], tableOptions?.showExpanderColumn ?? true))
    setData(generateRowsFromCellRows(tableData.rows))
  }, [tableData])

  const table = useReactTable({
    data,
    columns,
    pageCount: pageCount,
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

  const getSortIcon = (sortDirection: SortDirection): string | null =>
    ({
      asc: ' 🔼',
      desc: ' 🔽',
    }[sortDirection] ?? null)

  return (
    <Container>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) =>
                header.column.id === 'expander' ? (
                  <StyledTableHeader key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </StyledTableHeader>
                ) : (
                  <StyledTableHeader
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
                    {getSortIcon(header.column.getIsSorted() as SortDirection)}
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
                  key={cell.id}
                  style={{
                    background: cellIdx % 2 === 1 ? 'white' : TRANSLUCENT_BRIGHT_BLUE_TABLE,
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
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          data-testid="next-page-chevron"
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        {dataQuery.isFetching ? 'Loading...' : null}
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(pagination, null, 2)}</pre>
    </Container>
  )
}

export default function TablePaginated(props: IProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <PaginatedTable {...props} />
    </QueryClientProvider>
  )
}

interface IProps {
  tableData: TableData
  fetchData: (options: IFetchDataOptions) => IPaginatedResult
  tableOptions?: ITableOptions
}

interface ITableOptions {
  showExpanderColumn?: boolean
  pageSize?: number
}

export interface IFetchDataOptions {
  pageIndex: number
  pageSize: number
}

export interface IPaginatedResult {
  tableData: TableData
  totalCount: number
}

export interface ICellProps {
  value: string
  row: DataRow
  columnId: string
}

export interface Header {
  id?: string
  header: string | JSX.Element
  accessor: string
  subheaders?: Header[]
  cell?: FC<ICellProps>
}

export interface Cell {
  key: string
  value: string | JSX.Element
  render?: FC<ICellProps>
}

export interface CellRow {
  id?: string
  cells: Cell[]
  render?: FC<ICellProps>
  subRows?: CellRow[]
}

export interface TableData {
  headers: Header[]
  rows: CellRow[]
}

export declare type CellData = string | FC<ICellProps> | Record<string, FC<ICellProps>> | DataRow[] | JSX.Element
export declare type DataRow = {
  [key: string]: CellData
  subRows: DataRow[]
}
