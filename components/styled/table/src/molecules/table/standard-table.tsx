import { useState, useEffect, useMemo } from 'react'
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  ExpandedState,
  getExpandedRowModel,
  getSortedRowModel,
  SortingState,
  PaginationState,
  getPaginationRowModel,
} from '@tanstack/react-table'
import { Container, StyledTable, ScrollableContainer } from './table-styles'
import PaginationControls from './pagination-controls'
import {
  buildTableBody,
  buildTableHead,
  CellData,
  DataRow,
  generateColumnsFromHeadersRecursively,
  generateRowsFromCellRows,
  ITableOptions,
  TableData,
} from './table-core'

const StandardTable = ({ tableData, tableOptions }: IStandardTableProps): JSX.Element => {
  const [columns, setColumns] = useState<ColumnDef<DataRow, CellData | unknown>[]>([])
  const [data, setData] = useState<DataRow[]>([])
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: tableOptions.pageSize ?? 10,
  })

  const paginationEnabled = tableOptions.enablePagination ?? false

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )
  const tData = useMemo(() => (!tableData ? { headers: [], rows: [] } : tableData), [tableData])
  const showExpanderColumn = tableOptions.showExpanderColumn ?? false

  useEffect(() => {
    setColumns(generateColumnsFromHeadersRecursively(tData.headers, showExpanderColumn))
    setData(generateRowsFromCellRows(tData.rows))
  }, [tData, showExpanderColumn])

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
      sorting,
      ...(paginationEnabled ? { pagination } : {}),
    },
    onExpandedChange: setExpanded,
    onSortingChange: setSorting,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...(paginationEnabled
      ? {
          getPaginationRowModel: getPaginationRowModel(),
          onPaginationChange: setPagination,
        }
      : {}),
  })

  return (
    <Container>
      <ScrollableContainer>
        <StyledTable>
          {buildTableHead(table)}
          {buildTableBody(table)}
        </StyledTable>
      </ScrollableContainer>
      {tableOptions.enablePagination ? (
        <PaginationControls
          table={table}
          perPageOptions={tableOptions.perPageOptions}
          isFetching={false}
          serverSidePagination={false}
        />
      ) : null}
    </Container>
  )
}

interface IStandardTableProps {
  tableData: TableData
  tableOptions: ITableOptions
}

export default StandardTable
