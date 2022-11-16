import styled from '@emotion/styled'
import { Icon, IconButton } from '@ltht-react/icon'
import { TEXT_COLOURS, TRANSLUCENT_BRIGHT_BLUE_TABLE } from '@ltht-react/styles'
import { flexRender, Table } from '@tanstack/react-table'
import { Dispatch, SetStateAction } from 'react'
import { CellProps } from './table-cell'
import { StandardButtonStyle, StyledTableData, StyledTableHeader } from './table-styles'

const DefaultTableOptions = {
  showExpanderColumn: false,
  pageSize: 10,
  enablePagination: false,
  serverSidePagination: false,
  hidePaginationControls: false,
  hidePerPageOptions: false,
}

const DefaultPerPageOptions = [10, 20, 30, 40, 50]

const buildTableHead = (table: Table<DataEntity>) => (
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
)

const buildTableBody = (table: Table<DataEntity>) => (
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
)

const StyledStandardButton = styled(IconButton)`
  ${StandardButtonStyle}
`
const displayErrorMessage = (message: string, setState: Dispatch<SetStateAction<boolean>>) => (
  <>
    <div style={{ padding: 10, borderRadius: 10 }}>
      <Icon type="exclamation" size="medium" style={{ color: TEXT_COLOURS.DANGER, marginRight: 5 }} />
      {message}
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <StyledStandardButton
        iconProps={{ type: 'spinner', size: 'small', animate: false }}
        text="Reload"
        onClick={() => setState(true)}
      />
    </div>
  </>
)

type DataEntity = Record<string, CellProps | DataEntity[]> & {
  subRows?: DataEntity[]
}

interface Header {
  type: 'accessor' | 'group' | 'display'
  id: string
  cellProps: CellProps
  subHeaders?: Header[]
}

interface TableData {
  headers: Header[]
  rows: DataEntity[]
}

interface TableOptions {
  pageSize?: number
  perPageOptions?: number[]
  enablePagination?: boolean
  serverSidePagination?: boolean
  hidePaginationControls?: boolean
  hidePerPageOptions?: boolean
}

interface PaginationOptions {
  pageIndex: number
  pageSize: number
}

interface PaginationResult {
  tableData: TableData
  totalCount: number
}

export {
  DefaultTableOptions,
  DefaultPerPageOptions,
  DataEntity,
  Header,
  TableData,
  TableOptions,
  PaginationOptions,
  PaginationResult,
  buildTableHead,
  buildTableBody,
  displayErrorMessage,
}
