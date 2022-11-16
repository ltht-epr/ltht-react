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
import styled from '@emotion/styled'
import { CSS_RESET, SCROLLBAR, TABLE_COLOURS } from '@ltht-react/styles'
import { CellProps } from './table-cell'
import createColumns from './table-methods'
import useDimensionsRef from './useDimensionRef'

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
  border-collapse: separate;
  border-spacing: 0px;
  border-radius: 6px;
`

const StyledTableHeader = styled.th<IStyledTableCell>`
  background-color: ${TABLE_COLOURS.HEADER};
  border: thin solid ${TABLE_COLOURS.BORDER};
  font-weight: bold;
  padding: 1rem;

  ${({ stickyWidth }) =>
    stickyWidth !== undefined &&
    `
    position: sticky !important;
    left: ${stickyWidth}px;
    top: 0;
    z-index: 1;`}
`

const StyledTableData = styled.td<IStyledTableCell>`
  border: thin solid ${TABLE_COLOURS.BORDER};
  white-space: nowrap;

  ${({ stickyWidth }) =>
    stickyWidth !== undefined &&
    `
    position: sticky !important;
    left: ${stickyWidth}px;
    top: 0;
    z-index: 1;`}

  &:first-of-type {
    background-color: ${TABLE_COLOURS.HEADER} !important;
  }
`

const Table: FC<IProps> = ({ tableData, staticColumns = 0 }) => {
  const firstColumn = useRef(null)
  const { width } = useDimensionsRef(firstColumn)

  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: tableData.rows,
    columns: createColumns(tableData),
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

interface IStyledTableCell {
  stickyWidth?: number
}

export type DataEntity = Record<string, CellProps | DataEntity[]> & {
  subRows?: DataEntity[]
}

export interface Header {
  type: 'accessor' | 'group' | 'display'
  id: string
  cellProps: CellProps
  subHeaders?: Header[]
}

export interface TableData {
  headers: Header[]
  rows: DataEntity[]
}

interface IProps {
  tableData: TableData
  staticColumns?: 0 | 1 | 2
}

export default Table
