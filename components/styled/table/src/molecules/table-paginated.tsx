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
  Table as ReactTable,
} from '@tanstack/react-table'
import uuid from 'react-uuid'
import styled from '@emotion/styled'
import {
  CSS_RESET,
  TRANSLUCENT_BRIGHT_BLUE_TABLE,
  TRANSLUCENT_MID_GREY,
  SCROLLBAR,
  TRANSLUCENT_BRIGHT_BLUE,
} from '@ltht-react/styles'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { EmotionIconButton, Icon, IconButton } from '@ltht-react/icon'

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

const PaginationContainer = styled.div`
  ${CSS_RESET};
  margin-top: 5px;
`

const paginationButtonStyle = `
padding: 2px 5px;
background-color: ${TRANSLUCENT_BRIGHT_BLUE};
color: black;
border: 1px solid ${TRANSLUCENT_MID_GREY};
margin: 0 2.5px;
border-radius: 3px;

&:disabled {
  background-color: inherit;
  color: gray;
  border-color: ${TRANSLUCENT_MID_GREY};
  pointer-events: none;
}
`

const StyledEmotionIconButton = styled(EmotionIconButton)`
  ${paginationButtonStyle}
`

const StyledIconButton = styled(IconButton)`
  ${paginationButtonStyle}
`

const StyledPaginationPageInput = styled.input`
  ${CSS_RESET};
  width: 50px;
  border: 1px solid gray;
`
const StyledPaginationPageSelect = styled.select`
  ${CSS_RESET};
  width: 50px;
  display: inline-block;
  font-size: 0.9rem;
  border: 1px solid gray;
`

const StyledHideOnMobile = styled.span`
  @media (max-width: 320px) {
    display: none;
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

  if (tableData) {
    useEffect(() => {
      setColumns(
        generateColumnsFromHeadersRecursively(tableData.headers ?? [], tableOptions?.showExpanderColumn ?? true)
      )
      setData(generateRowsFromCellRows(tableData.rows))
    }, [tableData])
  }

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
    <>
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
      </Container>
      <PaginationContainer>
        <div style={{ float: 'left' }}>
          <StyledPaginationPageSelect
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value))
            }}
          >
            {(tableOptions?.perPageOptions ?? [10, 20, 30, 40, 50]).map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </StyledPaginationPageSelect>{' '}
          <StyledHideOnMobile>Per Page</StyledHideOnMobile>
        </div>
        <div style={{ float: 'right' }}>
          {dataQuery.isFetching ? (
            <>
              <Icon type="spinner" size="medium" /> <StyledHideOnMobile>Loading</StyledHideOnMobile>
            </>
          ) : null}
          <StyledEmotionIconButton
            iconProps={{ type: 'chevron-double', direction: 'left', size: '0.8rem' }}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          />
          <StyledIconButton
            iconProps={{ type: 'chevron', direction: 'left', size: 'small' }}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
          <StyledPaginationPageInput
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            value={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
          />{' '}
          of <span style={{ marginRight: 5 }}>{table.getPageCount()}</span>
          <StyledIconButton
            iconProps={{ type: 'chevron', direction: 'right', size: 'small' }}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
          <StyledEmotionIconButton
            iconProps={{ type: 'chevron-double', direction: 'right', size: '0.8rem' }}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          />
        </div>
      </PaginationContainer>
    </>
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
  tableData?: TableData
  fetchData: (options: IFetchDataOptions) => Promise<IPaginatedResult>
  tableOptions?: ITableOptions
}

interface ITableOptions {
  showExpanderColumn?: boolean
  pageSize?: number
  perPageOptions?: number[]
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
