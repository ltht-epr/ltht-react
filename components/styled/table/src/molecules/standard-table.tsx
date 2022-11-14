import { FC, useState, useMemo } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel,
  getSortedRowModel,
  ExpandedState,
  SortingState,
  PaginationState,
  getPaginationRowModel,
} from '@tanstack/react-table'
import { TRANSLUCENT_BRIGHT_BLUE_TABLE } from '@ltht-react/styles'
import createColumns from './table-methods'
import { Container, ScrollableContainer, StyledTable, StyledTableData, StyledTableHeader } from './table-styles'
import { TableData, TableOptions } from './table-core'
import TablePaginationControls from './table-pagination-controls'

const StandardTable: FC<IProps> = ({ tableData, tableOptions }) => {
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: tableOptions.pageSize ?? 10,
  })
  const pagination = useMemo(() => ({ pageIndex, pageSize }), [pageIndex, pageSize])

  const paginationEnabled = tableOptions.enablePagination ?? false
  const showExpanderColumn = tableOptions.showExpanderColumn ?? false

  const table = useReactTable({
    data: tableData.rows,
    columns: createColumns(tableData, showExpanderColumn),
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
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) =>
                  header.column.id === 'expander' ? (
                    <StyledTableHeader key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </StyledTableHeader>
                  ) : (
                    <StyledTableHeader
                      key={header.id}
                      colSpan={header.colSpan}
                      {...{
                        style: {
                          cursor: header.column.getCanSort() ? 'pointer' : '',
                        },
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </StyledTableHeader>
                  )
                )}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell, cellIdx) => (
                  <StyledTableData
                    key={cell.id}
                    style={{
                      background: cellIdx % 2 === 1 ? 'white' : TRANSLUCENT_BRIGHT_BLUE_TABLE,
                      textAlign: 'center',
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledTableData>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </ScrollableContainer>
      {!(tableOptions.hidePaginationControls ?? false) ? paginationControls : null}
    </Container>
  )
}

interface IProps {
  tableData: TableData
  tableOptions: TableOptions
}

export default StandardTable
