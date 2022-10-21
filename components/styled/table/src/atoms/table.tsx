import { useTable, Column, useSortBy, HeaderGroup } from 'react-table'
import styled from '@emotion/styled'
import {
  CSS_RESET,
  TRANSLUCENT_BRIGHT_BLUE_TABLE,
  TRANSLUCENT_GREY_TABLE,
  TRANSLUCENT_MID_GREY,
} from '@ltht-react/styles'
import { useEffect, useState } from 'react'

const Container = styled.div`
  ${CSS_RESET};
  background-color: white;
  border-radius: 6px;
`

const StyledTable = styled.table`
  width: 100%;
  border-radius: 6px;
  border-collapse: collapse;
  border: thin solid ${TRANSLUCENT_MID_GREY};
`

const StyledTableHeader = styled.th`
  font-weight: bold
  border-radius: 6px;
`

const generateColumnsFromHeadersRecursively = (headers?: Header[]): Column<Record<string, string>>[] =>
  (headers ?? []).map((header) => ({
    Header: header.header,
    accessor: header.subheaders ? '' : header.accessor,
    columns: header.subheaders ? generateColumnsFromHeadersRecursively(header.subheaders) : undefined,
    sortType: 'basic',
    // TODO: Figure out why sorting headers with subheaders causes an error and fix
    disableSortBy: !!header.subheaders,
  }))

const generateRowsFromCellRows = (cellRows: CellRow[]): Record<string, string>[] =>
  cellRows.map((cellRow) => {
    const mappedCell: Record<string, string> = {}

    cellRow.cells.forEach((cell) => {
      mappedCell[cell.key] = cell.value
    })

    return mappedCell
  })

export default function Table<TColumn, TRow>({
  tableData,
  columnData,
  rowData,
  mapToTableData,
}: IProps<TColumn, TRow>) {
  const [columns, setColumns] = useState<Column<Record<string, string>>[]>([])
  const [data, setData] = useState<Record<string, string>[]>([])

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

  const sortIcon = (column: HeaderGroup<Record<string, string>>) => {
    if (column.isSorted) {
      return <span>{column.isSortedDesc ? ' 🔽' : ' 🔼'}</span>
    }
    return ''
  }

  return (
    <Container>
      <StyledTable {...getTableProps()}>
        <thead>
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
