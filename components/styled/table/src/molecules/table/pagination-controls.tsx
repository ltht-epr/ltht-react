import { Table } from '@tanstack/react-table'
import { Icon, IconButton } from '@ltht-react/icon'
import styled from '@emotion/styled'
import {
  PaginationContainer,
  StyledPaginationPageInput,
  StyledPaginationPageSelect,
  StyledHideOnMobile,
  PaginationButtonStyle,
  StyledPaginationButtonDiv,
  StyledPageCountDiv,
} from './table-styles'
import { DefaultPerPageOptions, DefaultTableOptions, ITableOptions } from './table-core'

const StyledIconButton = styled(IconButton)`
  ${PaginationButtonStyle}
`

function PaginationControls<T>({ table, tableOptions, isFetching, serverSidePagination }: IProps<T>) {
  const { perPageOptions, hidePerPageOptions } = tableOptions
  const perPageOptionsValidated = perPageOptions ?? DefaultPerPageOptions
  const hidePerPageOptionsValidated = hidePerPageOptions ?? DefaultTableOptions.hidePerPageOptions

  return (
    <PaginationContainer data-testid="page-table-pagination-container">
      {!hidePerPageOptionsValidated ? (
        <div style={{ float: 'left' }}>
          <StyledPaginationPageSelect
            data-testid="paged-table-per-page-select"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value))
            }}
          >
            {perPageOptionsValidated.map((pageSize: number) => (
              <option data-testid="paged-table-per-page-select-option" key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </StyledPaginationPageSelect>{' '}
          <StyledHideOnMobile>Per Page</StyledHideOnMobile>
        </div>
      ) : null}
      <StyledPaginationButtonDiv>
        {isFetching && serverSidePagination ? (
          <>
            <Icon type="spinner" size="medium" /> <StyledHideOnMobile>Loading</StyledHideOnMobile>
          </>
        ) : null}
        <StyledIconButton
          data-testid="paged-table-first-page-btn"
          iconProps={{ type: 'chevron-double', direction: 'left', size: 'small' }}
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        />
        <StyledIconButton
          data-testid="paged-table-previous-page-btn"
          iconProps={{ type: 'chevron', direction: 'left', size: 'small' }}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        />
        <StyledPaginationPageInput
          data-testid="paged-table-current-page-input"
          type="number"
          value={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            table.setPageIndex(page)
          }}
        />
        <StyledPageCountDiv data-testid="paged-table-page-count">
          <span style={{ padding: '2px' }}>of {table.getPageCount()}</span>
        </StyledPageCountDiv>
        <StyledIconButton
          data-testid="paged-table-next-page-btn"
          iconProps={{ type: 'chevron', direction: 'right', size: 'small' }}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        />
        <StyledIconButton
          data-testid="paged-table-last-page-btn"
          iconProps={{ type: 'chevron-double', direction: 'right', size: 'small' }}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        />
      </StyledPaginationButtonDiv>
    </PaginationContainer>
  )
}

interface IProps<T> {
  table: Table<T>
  isFetching: boolean
  serverSidePagination: boolean
  tableOptions: ITableOptions
}

export default PaginationControls
