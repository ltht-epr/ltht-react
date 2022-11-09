import { Table } from '@tanstack/react-table'
import { EmotionIconButton, Icon, IconButton } from '@ltht-react/icon'
import styled from '@emotion/styled'
import {
  PaginationContainer,
  StyledPaginationPageInput,
  StyledPaginationPageSelect,
  StyledHideOnMobile,
  paginationButtonStyle,
} from './table-styles'
import { DefaultPerPageOptions } from './table-core'

const StyledEmotionIconButton = styled(EmotionIconButton)`
  ${paginationButtonStyle}
`

const StyledIconButton = styled(IconButton)`
  ${paginationButtonStyle}
`

function PaginationControls<T>({ table, perPageOptions, isFetching, serverSidePagination }: IProps<T>) {
  const perPageOptionsValidated = perPageOptions ?? DefaultPerPageOptions

  return (
    <PaginationContainer>
      <div>
        <StyledPaginationPageSelect
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {perPageOptionsValidated.map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </StyledPaginationPageSelect>{' '}
        <StyledHideOnMobile>Per Page</StyledHideOnMobile>
      </div>
      <div>
        {isFetching && serverSidePagination ? (
          <>
            <Icon type="spinner" size="medium" /> <StyledHideOnMobile>Loading</StyledHideOnMobile>
          </>
        ) : null}
        <StyledEmotionIconButton
          iconProps={{ type: 'chevron-double', direction: 'left', size: '0.8rem' }}
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        />
        <StyledIconButton
          iconProps={{ type: 'chevron', direction: 'left', size: 'small' }}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        />
        <StyledPaginationPageInput
          type="number"
          value={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            table.setPageIndex(page)
          }}
        />{' '}
        of <span style={{ marginRight: 5 }}>{table.getPageCount()}</span>
        <StyledIconButton
          iconProps={{ type: 'chevron', direction: 'right', size: 'small' }}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        />
        <StyledEmotionIconButton
          iconProps={{ type: 'chevron-double', direction: 'right', size: '0.8rem' }}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        />
      </div>
    </PaginationContainer>
  )
}

interface IProps<T> {
  table: Table<T>
  perPageOptions?: number[]
  isFetching: boolean
  serverSidePagination: boolean
}

export default PaginationControls
