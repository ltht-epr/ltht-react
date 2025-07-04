import { forwardRef, Ref } from 'react'
import { flexRender, Header as ReactTableHeader } from '@tanstack/react-table'
import { StyledTableHeader } from './table-styled-components'

interface TableHeaderProps<TData, TValue> {
  tableId?: string
  header: ReactTableHeader<TData, TValue>
  stickyWidth?: number
}

export const Wrapper = <TData, TValue>(
  { tableId, header, stickyWidth }: TableHeaderProps<TData, TValue>,
  ref?: Ref<HTMLTableCellElement>
) => (
  <StyledTableHeader
    id={`${tableId}${header.id}`}
    ref={ref}
    stickyWidth={stickyWidth}
    colSpan={header.colSpan}
    role="columnheader"
    {...(header.column.id !== 'expander'
      ? {
          style: {
            cursor: header.column.getCanSort() ? 'pointer' : '',
          },
          onClick: header.column.getToggleSortingHandler(),
        }
      : {})}
  >
    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
  </StyledTableHeader>
)

const TableHeader = forwardRef(Wrapper) as <TData, TValue>(
  props: TableHeaderProps<TData, TValue> & { ref?: Ref<HTMLTableCellElement> }
) => ReturnType<typeof Wrapper>

export default TableHeader
