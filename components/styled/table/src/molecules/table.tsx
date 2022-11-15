import { FC, useState } from 'react'
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
import { CSS_RESET, TRANSLUCENT_MID_GREY, SCROLLBAR, TRANSLUCENT_BRIGHT_BLUE } from '@ltht-react/styles'
import { CellProps } from './table-cell'
import createColumns from './table-methods'

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

const Table: FC<IProps> = ({ tableData }) => {
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
}

export default Table
