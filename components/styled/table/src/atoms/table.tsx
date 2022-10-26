import { useTable, Column, useSortBy, HeaderGroup, Row } from 'react-table'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import styled from '@emotion/styled'
import { TRANSLUCENT_BRIGHT_BLUE_TABLE, TRANSLUCENT_GREY_TABLE, TRANSLUCENT_MID_GREY } from '@ltht-react/styles'
import { useEffect, useState, FC, PropsWithChildren } from 'react'
import { Checkbox } from '@material-ui/core'
import { EnsureMaybeArray } from '@ltht-react/utils'

const Container = styled.div`
  background-color: white;
`

const StyledTableHeader = styled.th`
  border: 1px solid rgba(200, 200, 200, 1);
`
const generateColumnsFromHeadersRecursively = (headers?: Header[]): Column<Record<string, ReactTableCell>>[] =>
  (headers ?? []).map((header) => ({
    id: header.id,
    Header: header.header,
    accessor: header.subheaders ? '' : header.accessor,
    columns: header.subheaders ? generateColumnsFromHeadersRecursively(header.subheaders) : undefined,
    sortType: 'basic',
    // TODO: Figure out why sorting headers with subheaders causes an error and fix
    disableSortBy: !!header.subheaders,
    Cell: (props: {
      value: PropsWithChildren<string>
      row: Record<string, unknown>
      column: Record<string, unknown>
    }) =>
      header?.cell
        ? header?.cell({
            value: props?.value,
            row: (props?.row?.original as unknown) as Record<string, ReactTableCell>,
            columnId: (props?.column?.id as string) ?? '',
          }) ?? ''
        : props?.value ?? '',
  }))

const generateRowsFromCellRows = (cellRows: CellRow[]): Record<string, ReactTableCell>[] =>
  cellRows.map((cellRow) => {
    const mappedCell: Record<string, ReactTableCell> = {}
    const mappedCellRender: Record<string, FC<ICellProps>> = {}
    const subCellRows: Record<string, ReactTableCell>[] = generateRowsFromCellRows(cellRow?.subCellRows ?? [])

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
      subCellRows,
    }
  })

const initialiseCollapsedRowStateRecursive = (rows: Record<string, ReactTableCell>[]): Record<string, boolean> => {
  let collapsedRows: Record<string, boolean> = {}

  rows.forEach((row) => {
    if (EnsureMaybeArray(row.subCellRows as Record<string, ReactTableCell>[]).length > 0) {
      collapsedRows[row.rowId as string] = true
      collapsedRows = {
        ...collapsedRows,
        ...initialiseCollapsedRowStateRecursive(row.subCellRows as Record<string, ReactTableCell>[]),
      }
    }
  })

  return collapsedRows
}

export default function Table<TColumn, TRow>({
  tableData,
  columnData,
  rowData,
  mapToTableData,
}: IProps<TColumn, TRow>) {
  const [columns, setColumns] = useState<Column<Record<string, ReactTableCell>>[]>([])
  const [data, setData] = useState<Record<string, ReactTableCell>[]>([])
  const [tableRowCollapsedState, setTableRowCollapsedState] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const mappedTableData =
      columnData && rowData && mapToTableData
        ? mapToTableData(columnData, rowData)
        : tableData ?? { headers: [], rows: [] }

    const dataState = generateRowsFromCellRows(mappedTableData.rows)

    setColumns(generateColumnsFromHeadersRecursively(mappedTableData.headers))
    setData(dataState)
    setTableRowCollapsedState(initialiseCollapsedRowStateRecursive(dataState))
  }, [tableData, columnData, rowData, mapToTableData])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  const sortIcon = (column: HeaderGroup<Record<string, ReactTableCell>>) => {
    if (column.isSorted) {
      return <span>{column.isSortedDesc ? ' 🔽' : ' 🔼'}</span>
    }
    return ''
  }

  const handleCollapsedRowClick = (rowId: string) => {
    tableRowCollapsedState[rowId] = !tableRowCollapsedState[rowId]
    setTableRowCollapsedState({ ...tableRowCollapsedState })
  }

  const collapsibleDiv = (
    originalRow: Row<Record<string, ReactTableCell>>,
    subRows: Record<string, ReactTableCell>[]
  ) => {
    const rowId: string = originalRow.original.rowId as string

    return (
      <>
        {buildCollapsedDivParent(rowId, originalRow, subRows)}
        {buildCollapsedDivChildrens(rowId, originalRow, subRows)}
      </>
    )
  }

  const buildCollapsedDivParent = (
    rowId: string,
    originalRow: Row<Record<string, ReactTableCell>>,
    subRows: Record<string, ReactTableCell>[]
  ) => {
    const header = originalRow.cells[0]
    const headerCustomRendering = (originalRow.original.renderCells as Record<string, FC<ICellProps>>)[header.column.id]
    const rowCustomRendering = originalRow.original.render as FC<ICellProps>
    const renderFunctionProps = {
      value: header.value,
      row: originalRow.original,
      columnId: (header.column?.id as string) ?? '',
    }

    let headerFinalRender: ReactTableCell = header.value

    if (headerCustomRendering) {
      headerFinalRender = headerCustomRendering(renderFunctionProps) ?? headerFinalRender
    } else if (rowCustomRendering) {
      headerFinalRender = rowCustomRendering(renderFunctionProps) ?? headerFinalRender
    }

    return (
      <TableRow
        {...originalRow.getRowProps()}
        onClick={() => handleCollapsedRowClick(rowId)}
        key={rowId}
        style={{ cursor: 'pointer' }}
      >
        {originalRow.cells.map((cell, cellIdx) => (
          <TableCell
            style={{
              background: cellIdx % 2 === 1 ? TRANSLUCENT_GREY_TABLE : TRANSLUCENT_BRIGHT_BLUE_TABLE,
              textAlign: 'center',
            }}
            {...cell.getCellProps()}
          >
            {cellIdx === 0 ? (
              <>
                {headerFinalRender} <span style={{ float: 'right' }}>{tableRowCollapsedState[rowId] ? '⮟' : '⮝'}</span>
              </>
            ) : (
              <Checkbox color="primary" checked={subRows.some((r) => r[cell.column.id] !== '')} />
            )}
          </TableCell>
        ))}
      </TableRow>
    )
  }

  const buildChildCollapsedDivParent = (
    parentRowId: string,
    row: Record<string, ReactTableCell>,
    subRows: Record<string, ReactTableCell>[],
    parentRow: Row<Record<string, ReactTableCell>>
  ) => {
    const rowId = row.rowId as string

    return (
      <TableRow
        onClick={() => handleCollapsedRowClick(rowId)}
        key={rowId}
        style={{ cursor: 'pointer', display: tableRowCollapsedState[parentRowId] === true ? 'none' : '' }}
      >
        {parentRow.cells.map((cell, cellIdx) => (
          <TableCell
            style={{
              background: TRANSLUCENT_MID_GREY,
              textAlign: 'center',
            }}
            {...cell.getCellProps()}
          >
            {cellIdx === 0 ? (
              <>
                {row[cell.column.id]}
                <span style={{ float: 'right' }}>{tableRowCollapsedState[rowId] ? '⮟' : '⮝'}</span>
              </>
            ) : (
              <Checkbox color="primary" checked={subRows.some((r) => r[cell.column.id] !== '')} />
            )}
          </TableCell>
        ))}
      </TableRow>
    )
  }

  const buildCollapsedDivChildrens = (
    rowId: string,
    originalRow: Row<Record<string, ReactTableCell>>,
    subRows: Record<string, ReactTableCell>[]
  ): JSX.Element[] =>
    subRows.map((row, index) => {
      const childrens = row.subCellRows as Record<string, ReactTableCell>[]
      if (childrens && childrens.length > 0) {
        return (
          <>
            {buildChildCollapsedDivParent(rowId, row, childrens, originalRow)}
            {buildCollapsedDivChildrens(row.rowId as string, originalRow, childrens)}
          </>
        )
      }

      return (
        <TableRow
          {...originalRow.getRowProps()}
          style={{ display: tableRowCollapsedState[rowId] === true ? 'none' : '' }}
          key={`${rowId}-${index}`}
        >
          {originalRow.cells.map((cell) => (
            <TableCell
              style={{
                background: TRANSLUCENT_MID_GREY,
                textAlign: 'center',
              }}
              {...cell.getCellProps()}
            >
              {row[cell.column.id]}
            </TableCell>
          ))}
        </TableRow>
      )
    })

  return (
    <Container>
      <CssBaseline />
      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTableHeader {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {sortIcon(column)}
                </StyledTableHeader>
              ))}
            </tr>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)

            const verticalGroups = EnsureMaybeArray(row.original.subCellRows as Record<string, ReactTableCell>[])
            if (verticalGroups && verticalGroups.length > 0) {
              return collapsibleDiv(row, verticalGroups)
            }

            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell, cellIdx) => (
                  <TableCell
                    style={{
                      background: cellIdx % 2 === 1 ? TRANSLUCENT_GREY_TABLE : TRANSLUCENT_BRIGHT_BLUE_TABLE,
                      textAlign: 'center',
                    }}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </MaUTable>
    </Container>
  )
}

interface IProps<TColumn, TRow> {
  tableData?: TableData
  columnData?: TColumn
  rowData?: TRow
  mapToTableData?: (colItems: TColumn, rowItems: TRow) => TableData
}

export interface ICellProps {
  value: string
  row: Record<string, ReactTableCell>
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
  subCellRows?: CellRow[]
}

export interface TableData {
  headers: Header[]
  rows: CellRow[]
}

export declare type ReactTableCell =
  | string
  | FC<ICellProps>
  | Record<string, FC<ICellProps>>
  | Record<string, ReactTableCell>[]
  | JSX.Element
