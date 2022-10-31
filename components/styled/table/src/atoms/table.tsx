import { useTable, Column, useSortBy, HeaderGroup, useExpanded, Cell as ReactCell } from 'react-table'
import styled from '@emotion/styled'
import { CSS_RESET, TRANSLUCENT_BRIGHT_BLUE, TRANSLUCENT_MID_GREY } from '@ltht-react/styles'
import { useEffect, useState, FC, PropsWithChildren } from 'react'

const Container = styled.div`
  ${CSS_RESET};
  background-color: white;
  border-radius: 8px;
  display: inline-block;
`

const StyledTable = styled.table`
  background-color: white;
  border-collapse: collapse;
  border-radius: 8px;
  padding: 1rem;
`

const StyledTableHeader = styled.th`
  border: thin solid rgba(200, 200, 200, 0.5);
  font-weight: bold;
  padding: 1rem;
`

const StyledTableBody = styled.tbody`
  text-align: center;
`

const StyledTableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${TRANSLUCENT_MID_GREY};
  }
  &:hover {
    background-color: ${TRANSLUCENT_BRIGHT_BLUE};
    cursor: pointer;
  }
`

const StyledTableData = styled.td`
  border: thin solid rgba(200, 200, 200, 0.5);
  white-space: nowrap;

  &:first-of-type {
    font-weight: bold;
  }
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
      subRows: generateRowsFromCellRows(cellRow.subRows ?? []),
    }
  })

const getExpanderColumn = (): Column<Record<string, ReactTableCell>> => ({
  // Build our expander column
  id: 'expander', // Make sure it has an ID
  Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
    <span {...getToggleAllRowsExpandedProps()}>{isAllRowsExpanded ? '▲' : '►'}</span>
  ),
  Cell: ({ row }: ReactCell) =>
    // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
    // to build the toggle for expanding a row
    row.canExpand ? (
      <span
        {...row.getToggleRowExpandedProps({
          style: {
            // We can even use the row.depth property
            // and paddingLeft to indicate the depth
            // of the row
            paddingLeft: `${row.depth * 2}rem`,
          },
        })}
      >
        {row.isExpanded ? '▲' : '►'}
      </span>
    ) : null,
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

    const columnArray = generateColumnsFromHeadersRecursively(mappedTableData.headers)
    const dataArray = generateRowsFromCellRows(mappedTableData.rows)

    setColumns(
      dataArray.some((x: Record<string, ReactTableCell>) => (x.subRows as Record<string, ReactTableCell>[]).length > 0)
        ? [getExpanderColumn(), ...columnArray]
        : columnArray
    )
    setData(dataArray)
  }, [tableData, columnData, rowData, mapToTableData])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded
  )

  const sortIcon = (column: HeaderGroup<Record<string, ReactTableCell>>) => {
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
        <StyledTableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <StyledTableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <StyledTableData>{cell.render('Cell')}</StyledTableData>
                ))}
              </StyledTableRow>
            )
          })}
        </StyledTableBody>
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
  subRows?: CellRow[]
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
