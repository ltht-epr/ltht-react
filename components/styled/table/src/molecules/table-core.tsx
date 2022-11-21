import { TABLE_COLOURS } from '@ltht-react/styles'
import { flexRender, Table } from '@tanstack/react-table'
import { CellProps } from './table-cell'
import { calculateStaticColumnOffset } from './table-methods'
import { StyledTableData, StyledTableHeader, StyledTHead } from './table-styled-components'

const buildTableHead = (
  table: Table<DataEntity>,
  staticColumns: 0 | 1 | 2,
  width: number,
  firstColumn: React.MutableRefObject<null>
) => (
  <StyledTHead>
    {table.getHeaderGroups().map((headerGroup) => (
      <tr key={headerGroup.id} role="row">
        {headerGroup.headers.map((header, headerIndex) =>
          header.column.id === 'expander' ? (
            <StyledTableHeader
              stickyWidth={calculateStaticColumnOffset(headerIndex, staticColumns, width)}
              key={header.id}
              colSpan={header.colSpan}
              ref={firstColumn}
              role="columnheader"
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
              role="columnheader"
            >
              {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
            </StyledTableHeader>
          )
        )}
      </tr>
    ))}
  </StyledTHead>
)

const buildTableBody = (table: Table<DataEntity>, staticColumns: 0 | 1 | 2, width: number) => (
  <tbody>
    {table.getRowModel().rows.map((row) => (
      <tr key={row.id} role="row">
        {row.getVisibleCells().map((cell, cellIdx) => (
          <StyledTableData
            stickyWidth={calculateStaticColumnOffset(cellIdx, staticColumns, width)}
            key={cell.id}
            style={{
              background: cellIdx % 2 === 1 ? TABLE_COLOURS.STRIPE_LIGHT : TABLE_COLOURS.STRIPE_DARK,
              textAlign: 'center',
            }}
            role="cell"
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </StyledTableData>
        ))}
      </tr>
    ))}
  </tbody>
)

type DataEntity = Record<string, CellProps | DataEntity[]> & {
  subRows?: DataEntity[]
}

interface Header {
  type: 'accessor' | 'group' | 'display'
  id: string
  cellProps: CellProps
  subHeaders?: Header[]
}

interface TableData {
  headers: Header[]
  rows: DataEntity[]
}

export { DataEntity, Header, TableData, buildTableBody, buildTableHead }
