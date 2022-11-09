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
import { CSS_RESET, TRANSLUCENT_BRIGHT_BLUE_TABLE, TRANSLUCENT_MID_GREY, SCROLLBAR } from '@ltht-react/styles'
import TablePaginated from './table-paginated'

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
  padding: 1rem;
`

const StyledTableData = styled.td`
  border: thin solid rgba(200, 200, 200, 0.5);
  white-space: nowrap;
  &:first-of-type {
    background-color: ${TRANSLUCENT_MID_GREY} !important;
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

  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  return (
    <TablePaginated
      tableOptions={{ pageSize: 1, perPageOptions: [1, 3, 5, 10, 15, 20] }}
      fetchData={async (options) => {
        return await sleep(2500).then(() => {
          return {
            tableData: {
              headers: tableData.headers,
              rows: tableData.rows.slice(
                options.pageIndex * options.pageSize,
                (options.pageIndex + 1) * options.pageSize
              ),
            },
            totalCount: tableData.rows.length,
          }
        })
      }}
    />
    // <Container>
    //   <StyledTable>
    //     <thead>
    //       {table.getHeaderGroups().map((headerGroup) => (
    //         <tr key={headerGroup.id}>
    //           {headerGroup.headers.map((header) =>
    //             header.column.id === 'expander' ? (
    //               <StyledTableHeader key={header.id} colSpan={header.colSpan}>
    //                 {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
    //               </StyledTableHeader>
    //             ) : (
    //               <StyledTableHeader
    //                 key={header.id}
    //                 colSpan={header.colSpan}
    //                 {...{
    //                   style: {
    //                     cursor: header.column.getCanSort() ? 'pointer' : '',
    //                   },
    //                   onClick: header.column.getToggleSortingHandler(),
    //                 }}
    //               >
    //                 {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
    //                 {getSortIcon(header.column.getIsSorted() as SortDirection)}
    //               </StyledTableHeader>
    //             )
    //           )}
    //         </tr>
    //       ))}
    //     </thead>
    //     <tbody>
    //       {table.getRowModel().rows.map((row) => (
    //         <tr key={row.id}>
    //           {row.getVisibleCells().map((cell, cellIdx) => (
    //             <StyledTableData
    //               key={cell.id}
    //               style={{
    //                 background: cellIdx % 2 === 1 ? 'white' : TRANSLUCENT_BRIGHT_BLUE_TABLE,
    //                 textAlign: 'center',
    //               }}
    //             >
    //               {flexRender(cell.column.columnDef.cell, cell.getContext())}
    //             </StyledTableData>
    //           ))}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </StyledTable>
    //   <div style={{ marginTop: 20 }}>

    //   </div>
    // </Container>
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
