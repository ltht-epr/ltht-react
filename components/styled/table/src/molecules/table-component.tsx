import Icon from '@ltht-react/icon'
import { flexRender, Header as ReactTableHeader, Table } from '@tanstack/react-table'
import React, { useMemo, useRef } from 'react'
import { calculateStaticColumnOffset } from './table-methods'
import {
  StyledNextPageButtonContainer,
  StyledSpinnerContainer,
  StyledTable,
  StyledTableRow,
  StyledTableData,
  StyledTableHeader,
  StyledTHead,
} from './table-styled-components'
import useDimensionsRef from './useDimensionRef'
import { CellProps } from './table-cell'
import { ITableConfig } from './table'

const TableComponent = <T,>({ table, staticColumns = 0, headerAxis}: ITableHeadProps<T>): JSX.Element => {
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
    switch (headerIndex) {
      case 0:
        return getHeaderElement(
          header,
          calculateStaticColumnOffset(headerIndex, totalStaticColumns, firstColumnWidth, secondColumnWidth),
          firstColumn
        )
      case 1:
        return getHeaderElement(
          header,
          calculateStaticColumnOffset(headerIndex, totalStaticColumns, firstColumnWidth, secondColumnWidth),
          secondColumn
        )

      default:
        return getHeaderElement(
          header,
          calculateStaticColumnOffset(headerIndex, totalStaticColumns, firstColumnWidth, secondColumnWidth)
        )
    }
  }

  const getHeaderElement = <TData, TValue>(
    header: ReactTableHeader<TData, TValue>,
    stickyWidth?: number,
    elementRef?: React.MutableRefObject<null>
  ) => (
    <StyledTableHeader
      stickyWidth={stickyWidth}
      key={header.id}
      colSpan={header.colSpan}
      ref={elementRef}
      role="columnheader"
      {...(header.column.id !== 'expander'
        ? {
          style: {
            cursor: header.column.getCanSort() ? 'pointer' : '',
          },
          onClick: header.column.getToggleSortingHandler(),
        }
        : {})}
    >
      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
    </StyledTableHeader>
  )

  return (
    <StyledTable ref={tableElement}>
      <StyledTHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} role="row">
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

interface ITableHeadProps<T> extends ITableConfig {
  table: Table<T>
}

export default TableComponent
export { TableNavigationButton, TableSpinner }
