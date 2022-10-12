import { FC } from 'react'
import { useTable, TableCellProps } from 'react-table'

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

const VerticalTable: FC<IProps> = ({ tableData }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: tableData.headers.map((header) => ({
      Header: header.header,
      accessor: header.accessor,
    })),
    data: tableData.rows,
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

interface IProps {
  tableData: TableData
}

export interface Header {
  header: string
  accessor: string
}

export interface TableData {
  headers: Header[]
  rows: KeyStringValuePair[]
}

export default VerticalTable
