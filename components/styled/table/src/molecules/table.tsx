import { FC, useState, useEffect } from 'react'
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
} from '@tanstack/react-table'
import uuid from 'react-uuid'
import styled from '@emotion/styled'
import { CSS_RESET, TRANSLUCENT_MID_GREY, SCROLLBAR, TRANSLUCENT_BRIGHT_BLUE } from '@ltht-react/styles'

const Container = styled.div`
  ${CSS_RESET};
  background-color: white;
  border-radius: 8px;
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
  border-radius: 8px;
  padding: 1rem;
`

const StyledTableHeader = styled.th`
  border: thin solid rgba(200, 200, 200, 0.5);
  font-weight: bold;
  padding: 1rem;
`

const StyledTableBody = styled.tbody`
  text-align: center;
`

const StyledTableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${TRANSLUCENT_MID_GREY};
  }
  &:hover {
    background-color: ${TRANSLUCENT_BRIGHT_BLUE};
    cursor: pointer;
  }
`

const StyledTableData = styled.td`
  border: thin solid rgba(200, 200, 200, 0.5);
  white-space: nowrap;

  &:first-of-type {
    font-weight: bold;
  }
`

const columnHelper = createColumnHelper<DataRow>()

const generateColumnsFromHeadersRecursively = (headers?: Header[]): ColumnDef<DataRow, CellData | unknown>[] =>
  headers?.map((header) =>
    header.subheaders
      ? columnHelper.group({
          id: header.id ?? uuid(),
          header: () => header.header,
          columns: generateColumnsFromHeadersRecursively(header.subheaders),
        })
      : (columnHelper.accessor(header.accessor, {
          id: header.accessor,
          cell: (info) => {
            const stringValue = (info?.getValue() as string) ?? ''
            return header.cell
              ? header.cell({ value: stringValue, columnId: info.column.id, row: info.row.original })
              : stringValue
          },
          header: () => header.header,
        }) as ColumnDef<DataRow, CellData | unknown>)
  ) ?? []

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

export default function Table({ tableData }: IProps): JSX.Element {
  const [columns, setColumns] = useState<ColumnDef<DataRow, CellData | unknown>[]>([])
  const [data, setData] = useState<DataRow[]>([])
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [sorting, setSorting] = useState<SortingState>([])

  useEffect(() => {
    const columnArray = generateColumnsFromHeadersRecursively(tableData.headers)
    const dataArray = generateRowsFromCellRows(tableData.rows)

    setColumns(
      dataArray.some((x: DataRow) => x.subRows.length > 0) ? [getExpanderColumn(), ...columnArray] : columnArray
    )
    setData(dataArray)
  }, [tableData])

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
      sorting,
    },
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
        <StyledTableBody>
          {table.getRowModel().rows.map((row) => (
            <StyledTableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <StyledTableData>{flexRender(cell.column.columnDef.cell, cell.getContext())}</StyledTableData>
              ))}
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </Container>
  )
}

interface IProps {
  tableData: TableData
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
