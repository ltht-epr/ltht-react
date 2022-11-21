import { Icon } from '@ltht-react/icon'
import { TABLE_COLOURS } from '@ltht-react/styles'
import { flexRender, Table } from '@tanstack/react-table'
import { useRef } from 'react'
import { calculateStaticColumnOffset } from './table-methods'
import {
  StyledNextPageButtonContainer,
  StyledTable,
  StyledTableData,
  StyledTableHeader,
  StyledTHead,
} from './table-styled-components'
import useDimensionsRef from './useDimensionRef'

const TableComponent = <T,>({ table, staticColumns }: ITableHeadProps<T>): JSX.Element => {
  const firstColumn = useRef(null)
  const { width } = useDimensionsRef(firstColumn)

  return (
    <StyledTable>
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
    </StyledTable>
  )
}

const TableNavigationButton = ({ position, getCanNextPage, nextPage }: ITableNavButtonProps) => (
  <StyledNextPageButtonContainer
    role="button"
    elementPosition={position}
    onClick={() => nextPage()}
    hidden={!getCanNextPage()}
  >
    <Icon type="chevron" direction={position === 'bottom' ? 'down' : 'right'} size="medium" />
  </StyledNextPageButtonContainer>
)

interface ITableNavButtonProps {
  position: 'bottom' | 'right'
  getCanNextPage: () => boolean
  nextPage: () => void
}

interface ITableHeadProps<T> {
  table: Table<T>
  staticColumns: 0 | 1 | 2
}

export default TableComponent
export { TableNavigationButton }
