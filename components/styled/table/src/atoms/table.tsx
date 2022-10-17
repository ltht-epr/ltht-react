import { useTable, Column } from 'react-table'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import styled from '@emotion/styled'
import { TRANSLUCENT_BRIGHT_BLUE_TABLE, TRANSLUCENT_GREY_TABLE } from '@ltht-react/styles'

const Container = styled.div`
  background-color: white;
`

const StyledTableHeader = styled.th`
  border: 1px solid rgba(200, 200, 200, 1);
`

const generateColumnsFromHeadersRecursively = (headers?: Header[]): Column<Record<string, string>>[] => {
  if (!headers || headers.length < 1) {
    return []
  }

  return headers.map((header) => {
    if (header.subheaders) {
      return {
        Header: header.header,
        accessor: header.accessor,
        columns: generateColumnsFromHeadersRecursively(header.subheaders),
      }
    }

    return {
      Header: header.header,
      accessor: header.accessor,
    }
  })
}

const generateRowsFromCellRows = (cellRows: CellRow[]): Record<string, string>[] => {
  const mappedCells: Record<string, string>[] = []

  cellRows.forEach((cellRow) => {
    const mappedCell: Record<string, string> = {}

    cellRow.cells.forEach((cell) => {
      mappedCell[cell.key] = cell.value
    })

    mappedCells.push(mappedCell)
  })

  return mappedCells
}

export default function Table<TColumn, TRow>({
  tableData,
  columnData,
  rowData,
  mapToTableData,
}: IProps<TColumn, TRow>) {
  const mappedTabledata =
    columnData && rowData && mapToTableData
      ? mapToTableData(columnData, rowData)
      : tableData ?? { headers: [], rows: [] }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: generateColumnsFromHeadersRecursively(mappedTabledata.headers),
    data: generateRowsFromCellRows(mappedTabledata.rows),
  })

  return (
    <Container>
      <CssBaseline />
      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTableHeader {...column.getHeaderProps()}>{column.render('Header')}</StyledTableHeader>
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

export interface Header {
  header: string
  accessor: string
  subheaders?: Header[]
}

export interface Cell {
  key: string
  value: string
}

export interface CellRow {
  cells: Cell[]
}

export interface TableData {
  headers: Header[]
  rows: CellRow[]
}
