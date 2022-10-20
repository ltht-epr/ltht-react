import { useTable, Column, useSortBy, HeaderGroup } from 'react-table'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import styled from '@emotion/styled'
import { TRANSLUCENT_BRIGHT_BLUE_TABLE, TRANSLUCENT_GREY_TABLE } from '@ltht-react/styles'
import { useEffect, useState, FC, PropsWithChildren } from 'react'

const Container = styled.div`
  background-color: white;
`

const StyledTableHeader = styled.th`
  border: 1px solid rgba(200, 200, 200, 1);
`
export declare type ReactTableCell = string | FC<ICellProps>

const generateColumnsFromHeadersRecursively = (headers?: Header[]): Column<Record<string, ReactTableCell>>[] =>
  (headers ?? []).map((header) => ({
    Header: header.header,
    accessor: header.subheaders ? '' : header.accessor,
    columns: header.subheaders ? generateColumnsFromHeadersRecursively(header.subheaders) : undefined,
    sortType: 'basic',
    // TODO: Figure out why sorting headers with subheaders causes an error and fix
    disableSortBy: !!header.subheaders,
    Cell: (props: { value: PropsWithChildren<string>; row: Record<string, unknown> }) =>
      header?.cell
        ? header?.cell({
            value: props?.value,
            row: (props?.row?.original as unknown) as Record<string, ReactTableCell>,
          }) ?? ''
        : props?.value ?? '',
  }))

const generateRowsFromCellRows = (cellRows: CellRow[]): Record<string, ReactTableCell>[] =>
  cellRows.map((cellRow) => {
    const mappedCell: Record<string, ReactTableCell> = {}

    cellRow.cells.forEach((cell) => {
      mappedCell[cell.key] = cell.value
    })

    // this is to allow custom cell render option for vertical table
    mappedCell.id = cellRow.id ?? ''
    mappedCell.render = cellRow.render ? cellRow.render : (props: ICellProps) => <>{props.value}</>

    return mappedCell
  })

export default function Table<TColumn, TRow>({
  tableData,
  columnData,
  rowData,
  mapToTableData,
}: IProps<TColumn, TRow>) {
  const [columns, setColumns] = useState<Column<Record<string, ReactTableCell>>[]>([])
  const [data, setData] = useState<Record<string, ReactTableCell>[]>([])

  useEffect(() => {
    const mappedTableData =
      columnData && rowData && mapToTableData
        ? mapToTableData(columnData, rowData)
        : tableData ?? { headers: [], rows: [] }

    setColumns(generateColumnsFromHeadersRecursively(mappedTableData.headers))
    setData(generateRowsFromCellRows(mappedTableData.rows))
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
}

export interface Header {
  header: string
  accessor: string
  subheaders?: Header[]
  cell?: FC<ICellProps>
}

export interface Cell {
  key: string
  value: string
}

export interface CellRow {
  id?: string
  cells: Cell[]
  render?: FC<ICellProps>
}

export interface TableData {
  headers: Header[]
  rows: CellRow[]
}
