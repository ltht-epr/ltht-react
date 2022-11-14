import { FC, useRef, useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel,
  getSortedRowModel,
  ExpandedState,
  SortingState,
} from '@tanstack/react-table'
import { TABLE_COLOURS } from '@ltht-react/styles'
import createColumns from './table-methods'
import useDimensionsRef from './useDimensionRef'
import { TableData } from './table-core'
import { Container, StyledTable, StyledTableData, StyledTableHeader } from './table-styles'

const Table: FC<IProps> = ({ tableData, staticColumns = 0 }) => {
  const firstColumn = useRef(null)
  const { width } = useDimensionsRef(firstColumn)

  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: tableData.rows,
    columns: createColumns(
      tableData,
      tableData.rows.some((row) => row.subRows)
    ),
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
      <StyledTable>
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
    </Container>
  )
}

interface IProps {
  tableData: TableData
  staticColumns?: 0 | 1 | 2
}

export default Table
