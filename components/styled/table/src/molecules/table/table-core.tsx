import { FC } from 'react'
import { ColumnDef, createColumnHelper, flexRender, SortDirection, Table } from '@tanstack/react-table'
import uuid from 'react-uuid'
import { TRANSLUCENT_BRIGHT_BLUE_TABLE } from '@ltht-react/styles'
import { StyledTableHeader, StyledTableData } from './table-styles'

const columnHelper = createColumnHelper<DataRow>()

export const DefaultTableOptions = {
  showExpanderColumn: false,
  pageSize: 10,
  enablePagination: false,
  serverSidePagination: false,
  hidePaginationControls: false,
  hidePerPageOptions: false,
}

export const DefaultPerPageOptions = [10, 20, 30, 40, 50]

export const generateColumnsFromHeadersRecursively = (
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

  return showExpanderColumn && tableColumns.length > 0 ? [getExpanderColumn(), ...tableColumns] : tableColumns
}

export const generateRowsFromCellRows = (cellRows: CellRow[]): DataRow[] =>
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

export const getExpanderColumn = (): ColumnDef<DataRow, CellData | unknown> =>
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

export const buildTableHead = (table: Table<DataRow>) => (
  <thead>
    {table.getHeaderGroups().map((headerGroup) => (
      <tr key={headerGroup.id} role="row">
        {headerGroup.headers.map((header) =>
          header.column.id === 'expander' ? (
            <StyledTableHeader key={header.id} colSpan={header.colSpan} role="columnheader">
              {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
            </StyledTableHeader>
          ) : (
            <StyledTableHeader
              role="columnheader"
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
)

export const buildTableBody = (table: Table<DataRow>) => (
  <tbody>
    {table.getRowModel().rows.map((row) => (
      <tr key={row.id} role="row">
        {row.getVisibleCells().map((cell, cellIdx) => (
          <StyledTableData
            role="cell"
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
)

export const getSortIcon = (sortDirection: SortDirection): string | null =>
  ({
    asc: ' 🔼',
    desc: ' 🔽',
  }[sortDirection] ?? null)

export interface ITableOptions {
  showExpanderColumn?: boolean
  pageSize?: number
  perPageOptions?: number[]
  enablePagination?: boolean
  serverSidePagination?: boolean
  hidePaginationControls?: boolean
  hidePerPageOptions?: boolean
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
