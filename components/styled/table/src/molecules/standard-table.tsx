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
  flexRender,
} from '@tanstack/react-table'
import createColumns from './table-methods'
import { Container, ScrollableContainer, StyledTable, StyledTableData, StyledTableHeader } from './table-styles'
import { TableData, TableOptions } from './table-core'
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

  const calculateStaticColumnOffset = (cellIdx: number, staticColumns: number, firstColumnWidth: number) => {
    if (cellIdx === 0) {
      return 0
    }

    if (cellIdx < staticColumns) {
      return firstColumnWidth
    }

    return undefined
  }

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
                {headerGroup.headers.map((header, headerIndex) =>
                  headerIndex === 0 ? (
                    <StyledTableHeader
                      stickyWidth={calculateStaticColumnOffset(headerIndex, staticColumns, width)}
                      key={header.id}
                      colSpan={header.colSpan}
                      ref={firstColumn}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </StyledTableHeader>
                  ) : (
                    <StyledTableHeader
                      stickyWidth={calculateStaticColumnOffset(headerIndex, staticColumns, width)}
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
                    stickyWidth={calculateStaticColumnOffset(cellIdx, staticColumns, width)}
                    key={cell.id}
                    style={{
                      background: cellIdx % 2 === 1 ? TABLE_COLOURS.STRIPE_LIGHT : TABLE_COLOURS.STRIPE_DARK,
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
  staticColumns: 0 | 1 | 2
}

export default StandardTable
