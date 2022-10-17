import { useTable, Column } from 'react-table'
import styled from '@emotion/styled'
import {
  CSS_RESET,
  TRANSLUCENT_BRIGHT_BLUE_TABLE,
  TRANSLUCENT_GREY_TABLE,
  TRANSLUCENT_MID_GREY,
} from '@ltht-react/styles'

const Container = styled.div`
  ${CSS_RESET};
  background-color: white;
  border-radius: 12px;
`

const StyledTable = styled.table`
  width: 100%;
  border-radius: 12px;
  border-collapse: collapse;
  border: thin solid ${TRANSLUCENT_MID_GREY};
`

const StyledTableHeader = styled.th`
  font-weight: bold
  border-radius: 12px;
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
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTableHeader {...column.getHeaderProps()}>{column.render('Header')}</StyledTableHeader>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIdx) => (
                  <td
                    style={{
                      background: cellIdx % 2 === 1 ? TRANSLUCENT_GREY_TABLE : TRANSLUCENT_BRIGHT_BLUE_TABLE,
                      textAlign: 'center',
                    }}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </StyledTable>
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
