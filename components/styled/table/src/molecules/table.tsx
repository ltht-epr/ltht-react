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
import useResize from './useResize'

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

const Table: FC<IProps> = ({ tableData, stickColumns = 1 }) => {
  const firstColumn = useRef(null)
  const { width } = useResize(firstColumn)

  const StyledTableHeader = styled.th`
    background-color: ${TABLE_COLOURS.HEADER};
    border: thin solid ${TABLE_COLOURS.BORDER};
    font-weight: bold;
    padding: 1rem;

    &.sticky {
      position: sticky !important;
      left: 0;
      top: 0;
      z-index: 1;
    }

    &.stickySecond {
      position: sticky !important;
      left: ${width}px;
      top: 0;
      z-index: 1;
    }
  `

  const StyledTableData = styled.td`
    border: thin solid ${TABLE_COLOURS.BORDER};
    white-space: nowrap;
    &:first-of-type {
      background-color: ${TABLE_COLOURS.HEADER} !important;
    }

    &.sticky {
      position: sticky !important;
      left: 0;
      top: 0;
      z-index: 1;
      background-color: white;
    }

    &.stickySecond {
      position: sticky !important;
      left: ${width}px;
      top: 0;
      z-index: 1;
      background-color: white;
    }
  `

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

  return (
    <Container>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, headerIndex) =>
                headerIndex === 0 ? (
                  <StyledTableHeader key={header.id} colSpan={header.colSpan} ref={firstColumn} className="sticky">
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
                    className={headerIndex < stickColumns ? 'stickySecond' : ''}
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
                  key={cell.id}
                  style={{
                    background: cellIdx % 2 === 1 ? TABLE_COLOURS.STRIPE_LIGHT : TABLE_COLOURS.STRIPE_DARK,
                    textAlign: 'center',
                  }}
                  className={cellIdx < stickColumns ? (cellIdx === 0 ? 'sticky' : 'stickySecond') : ''}
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
  stickColumns?: 0 | 1 | 2
}

export default Table
