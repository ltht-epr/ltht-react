import { FC, useState, useMemo, useRef } from 'react'
import {
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel,
  getSortedRowModel,
  ExpandedState,
  SortingState,
  PaginationState,
  getPaginationRowModel,
} from '@tanstack/react-table'
import { createColumns } from './table-methods'
import { Container, ScrollableContainer, StyledTable } from './table-styles'
import { buildTableBody, buildTableHead, TableData, TableOptions } from './table-core'
import TablePaginationControls from './table-pagination-controls'
import useDimensionsRef from './useDimensionRef'

const StandardTable: FC<IProps> = ({ tableData, tableOptions, staticColumns }) => {
  const firstColumn = useRef(null)
  const { width } = useDimensionsRef(firstColumn)

  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: tableOptions.pageSize ?? 10,
  })
  const pagination = useMemo(() => ({ pageIndex, pageSize }), [pageIndex, pageSize])

  const paginationEnabled = tableOptions.enablePagination ?? false

  const table = useReactTable({
    data: tableData.rows,
    columns: createColumns(tableData),
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

  const paginationControls = tableOptions.enablePagination ? (
    <TablePaginationControls
      table={table}
      tableOptions={tableOptions}
      isFetching={false}
      serverSidePagination={false}
    />
  ) : null

  return (
    <Container>
      <ScrollableContainer>
        <StyledTable role="table">
          {buildTableHead(table, staticColumns, firstColumn, width)}
          {buildTableBody(table, staticColumns, width)}
        </StyledTable>
      </ScrollableContainer>
      {!(tableOptions.hidePaginationControls ?? false) ? paginationControls : null}
    </Container>
  )
}

interface IProps {
  tableData: TableData
  tableOptions: TableOptions
  staticColumns: 0 | 1 | 2
}

export default StandardTable
