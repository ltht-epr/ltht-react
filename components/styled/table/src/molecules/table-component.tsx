import Icon from '@ltht-react/icon'
import { flexRender, Header as ReactTableHeader, Table } from '@tanstack/react-table'
import { HTMLAttributes, useMemo, useRef } from 'react'
import { calculateStaticColumnOffset } from './table-methods'
import {
  StyledNextPageButtonContainer,
  StyledSpinnerContainer,
  StyledTable,
  StyledTableRow,
  StyledTableData,
  StyledTHead,
} from './table-styled-components'
import useDimensionsRef from './useDimensionRef'
import { CellProps } from './table-cell'
import { ITableConfig } from './table'
import TableHeader from './table-header'

const TableComponent = <T,>({ table, staticColumns = 0, headerAxis, ...rest }: ITableHeadProps<T>): JSX.Element => {
  const tableId = rest.id ? `${rest.id}-` : ''

  const firstColumn = useRef(null)
  const secondColumn = useRef(null)
  const tableElement = useRef(null)
  const { width: firstColumnWidth } = useDimensionsRef(firstColumn, tableElement)
  const { width: secondColumnWidth } = useDimensionsRef(secondColumn, tableElement)

  const usingExpanderColumn = table.getHeaderGroups().some((x) => x.headers.some((h) => h.column.id === 'expander'))
  const totalStaticColumns = useMemo(
    () => (usingExpanderColumn ? staticColumns + 1 : staticColumns),
    [usingExpanderColumn, staticColumns]
  )

  const getHeaderColumn = <TData, TValue>(header: ReactTableHeader<TData, TValue>, headerIndex: number) => {
    const stickyWidth = calculateStaticColumnOffset(
      headerIndex,
      totalStaticColumns,
      firstColumnWidth,
      secondColumnWidth
    )
    const headerProps = {
      header,
      stickyWidth,
    }
    switch (headerIndex) {
      case 0:
        return <TableHeader key={header.id} tableId={tableId} ref={firstColumn} {...headerProps} />
      case 1:
        return <TableHeader key={header.id} tableId={tableId} ref={secondColumn} {...headerProps} />
      default:
        return <TableHeader key={header.id} tableId={tableId} {...headerProps} />
    }
  }

  return (
    <StyledTable ref={tableElement} {...rest}>
      <StyledTHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} id={`${tableId}${headerGroup.id}`} role="row">
            {headerGroup.headers.map((header, headerIndex) => getHeaderColumn(header, headerIndex))}
          </tr>
        ))}
      </StyledTHead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <StyledTableRow tableHeaderAxis={headerAxis} key={row.id} role="row">
            {row.getVisibleCells().map((cell, cellIdx) => (
              <StyledTableData
                tableHeaderAxis={headerAxis}
                stickyWidth={calculateStaticColumnOffset(
                  cellIdx,
                  totalStaticColumns,
                  firstColumnWidth,
                  secondColumnWidth
                )}
                key={cell.id}
                id={`${tableId}${cell.id}`}
                role="cell"
                style={(cell.getValue() as CellProps)?.parentStyle}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </StyledTableData>
            ))}
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  )
}

const TableNavigationButton = ({ position, hidden, clickHandler }: ITableNavButtonProps) => (
  <StyledNextPageButtonContainer
    role="button"
    elementPosition={position}
    onClick={() => clickHandler()}
    hidden={hidden}
  >
    <Icon type="chevron" direction={position === 'bottom' ? 'down' : 'right'} size="medium" />
  </StyledNextPageButtonContainer>
)

const TableSpinner = ({ position, hidden }: ITableSpinnerProps) => (
  <StyledSpinnerContainer elementPosition={position} hidden={hidden}>
    <Icon type="spinner" size="medium" title="Loading..." />
  </StyledSpinnerContainer>
)

interface ITableNavButtonProps {
  position: 'bottom' | 'right'
  hidden: boolean
  clickHandler: () => void
}

interface ITableSpinnerProps {
  position: 'bottom' | 'right'
  hidden: boolean
}

interface ITableHeadProps<T> extends ITableConfig, HTMLAttributes<HTMLTableElement> {
  table: Table<T>
}

export default TableComponent
export { TableNavigationButton, TableSpinner }
