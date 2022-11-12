import { FC } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'
import styled from '@emotion/styled'
import { CSS_RESET, TRANSLUCENT_BRIGHT_BLUE_TABLE, TRANSLUCENT_MID_GREY, SCROLLBAR } from '@ltht-react/styles'
import { CellProps } from './table-cell'
import createColumns from './table-methods'

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

const ReFactoredTable: FC<IProps> = ({ tableData }) => {
  const table = useReactTable({
    data: tableData.rows,
    columns: createColumns(tableData),
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
  )
}

export type UnknownDataType = Record<string, string | CellProps | UnknownDataType[]> & {
  key: string
  subRows?: UnknownDataType[]
}

export interface Header {
  type: 'accessor' | 'group' | 'display'
  id: string
  cellProps: CellProps
  subheaders?: Header[]
}

export interface TableData {
  headers: Header[]
  rows: UnknownDataType[]
}

interface IProps {
  tableData: TableData
}

export default ReFactoredTable
