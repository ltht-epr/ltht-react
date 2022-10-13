import { FC } from 'react'
import { useTable, TableCellProps, Column } from 'react-table'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { KeyStringValuePair } from '@ltht-react/types'
import styled from '@emotion/styled'
import { TRANSLUCENT_BRIGHT_BLUE_TABLE, TRANSLUCENT_GREY_TABLE } from '@ltht-react/styles'

const Container = styled.div`
  background-color: white;
`

const StyledTableCell: FC<CellProps> = styled(TableCell)`
  text-align: center !important;
  background-color: ${(props: CellProps) =>
    props.cellIndex % 2 === 1 ? TRANSLUCENT_GREY_TABLE : TRANSLUCENT_BRIGHT_BLUE_TABLE};
`

const StyledTableHeader = styled.th`
  border: 1px solid rgba(200, 200, 200, 1);
`

const generateColumnsFromHeadersRecursively = (headers?: Header[]): Column<KeyStringValuePair>[] => {
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

export default function Table<TColumn, TRow>({
  tableData,
  columnData,
  rowData,
  mapToTableData,
}: IProps<TColumn, TRow>) {
  let mappedTabledata: TableData | undefined = tableData

  if (!mappedTabledata && columnData && rowData && typeof mapToTableData === 'function') {
    mappedTabledata = mapToTableData(columnData, rowData)
  }

  if (!mappedTabledata) {
    mappedTabledata = { headers: [], rows: [] }
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: generateColumnsFromHeadersRecursively(mappedTabledata.headers),
    data: mappedTabledata.rows,
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
                  <StyledTableCell cellIndex={cellIdx} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </StyledTableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </MaUTable>
    </Container>
  )
}

interface CellProps extends TableCellProps {
  cellIndex: number
}

interface IProps<TColumn, TRow> {
  tableData?: TableData
  columnData: TColumn
  rowData: TRow
  mapToTableData?: (colItems: TColumn, rowItems: TRow) => TableData
}

export interface Header {
  header: string
  accessor: string
  subheaders?: Header[]
}

export interface TableData {
  headers: Header[]
  rows: KeyStringValuePair[]
}
