import { render, screen, within, fireEvent } from '@testing-library/react'
import Table from '@ltht-react/table'
import userEvent from '@testing-library/user-event'
import { mockTableData, mockTableDataForPagination, mockTableDataWithSubheaders } from './table.mockdata'

const getHeaders = () => within(screen.getAllByRole('rowgroup')[0])
const getDataCells = () => within(screen.getAllByRole('rowgroup')[1])
const getFirstHeaderRow = () => within(getHeaders().getAllByRole('row')[0])
const getSecondHeaderRow = () => within(getHeaders().getAllByRole('row')[1])

describe('Simple Table', () => {
  beforeEach(() => {
    render(<Table tableData={mockTableData} />)
  })

  it('Renders', () => {
    expect(screen.getByRole('table')).toBeVisible()
  })

  it('Renders two row groups', () => {
    expect(screen.getAllByRole('rowgroup')).toHaveLength(2)
  })

  it('Renders the headers in the first row group', () => {
    expect(getHeaders().getByRole('row')).toBeVisible()

    expect(getHeaders().getByText('First Question')).toBeVisible()
    expect(getHeaders().getByText('Second Question')).toBeVisible()
  })

  it('Renders the table data in the second row group', () => {
    expect(getDataCells().getAllByRole('row')).toHaveLength(2)

    expect(getDataCells().getByText('Answer 1 (set1)')).toBeVisible()
    expect(getDataCells().getByText('Answer 2 (set1)')).toBeVisible()
    expect(getDataCells().getByText('Answer 1 (set2)')).toBeVisible()
    expect(getDataCells().getByText('Answer 1 (set2)')).toBeVisible()
  })
})

describe('Table With Subheaders', () => {
  beforeEach(() => {
    render(<Table tableData={mockTableDataWithSubheaders} />)
  })

  it('Renders horizontal table with multiple row headers', () => {
    // assert that first row of headers has 3 headers
    expect(within(screen.getAllByRole('row')[0]).getAllByRole('columnheader')).toHaveLength(3)

    expect(getFirstHeaderRow().getAllByRole('columnheader')).toHaveLength(3)

    // assert that second row of headers has 4 headers
    expect(getSecondHeaderRow().getAllByRole('columnheader')).toHaveLength(4)
  })
})

describe('Table With Pagination Enabled (Client-Side)', () => {
  beforeEach(() => {
    render(
      <Table
        tableData={mockTableDataForPagination}
        tableOptions={{ enablePagination: true, pageSize: 10, perPageOptions: [10, 20, 50] }}
      />
    )
  })

  it('Renders horizontal table with pagination', () => {
    // assert pagination container is visible
    expect(screen.getByTestId('page-table-pagination-container')).toBeVisible()

    // assert per page select should have 3 options
    expect(screen.getByTestId('paged-table-per-page-select').children.length).toBe(3)

    // assert goto first page button is disabled since we start on first page
    expect(screen.getByTestId('paged-table-first-page-btn')).toBeDisabled()
    // assert goto previous page button is disabled since we start on first page
    expect(screen.getByTestId('paged-table-previous-page-btn')).toBeDisabled()

    // assert current page input box to have first page number
    expect(screen.getByTestId('paged-table-current-page-input')).toHaveValue(1)

    // assert total pages to be 5 as total result set is 50 (50/10 = 5)
    expect(screen.getByTestId('paged-table-page-count')).toHaveTextContent('5')

    // assert last page and next page buttons are not disabled
    expect(screen.getByTestId('paged-table-next-page-btn')).not.toBeDisabled()
    expect(screen.getByTestId('paged-table-last-page-btn')).not.toBeDisabled()
  })

  it('Navigates through paged records', () => {
    const nextButton = screen.getByTestId('paged-table-next-page-btn')
    const previousButton = screen.getByTestId('paged-table-previous-page-btn')
    // assert current page input box to have first page number
    expect(screen.getByTestId('paged-table-current-page-input')).toHaveValue(1)

    userEvent.click(nextButton)

    // assert current page input box to have updated to value of 2
    expect(screen.getByTestId('paged-table-current-page-input')).toHaveValue(2)

    // assert goto first page and previous page buttons are enabled
    expect(screen.getByTestId('paged-table-first-page-btn')).not.toBeDisabled()
    expect(screen.getByTestId('paged-table-previous-page-btn')).not.toBeDisabled()

    userEvent.click(previousButton)

    // assert current page input box to have updated to value of 2
    expect(screen.getByTestId('paged-table-current-page-input')).toHaveValue(1)

    // assert goto first page and previous page buttons are enabled
    expect(screen.getByTestId('paged-table-first-page-btn')).toBeDisabled()
    expect(screen.getByTestId('paged-table-previous-page-btn')).toBeDisabled()
  })

  it('Can change page size selection', () => {
    const pageSizeSelect = screen.getByTestId('paged-table-per-page-select')
    const options = screen.getAllByTestId('paged-table-per-page-select-option') as HTMLOptionElement[]
    const table = screen.getByRole('table')

    expect(options[0].selected).toBeTruthy()
    expect(options[1].selected).toBeFalsy()
    expect(options[2].selected).toBeFalsy()

    // assert 10 rows loaded to document before page size is changed
    expect(table.children[1].children.length).toBe(10)

    fireEvent.change(pageSizeSelect, { target: { value: 20 } })

    expect(options[0].selected).toBeFalsy()
    expect(options[1].selected).toBeTruthy()
    expect(options[2].selected).toBeFalsy()

    // assert total pages to be 3 as total result set is 50 (50/20 = 3 (rounded))
    expect(screen.getByTestId('paged-table-page-count')).toHaveTextContent('3')
    // assert 20 rows loaded to document after page size is changed
    expect(table.children[1].children.length).toBe(20)
  })
})

describe('Table With Pagination (Pagination Controls Hidden)', () => {
  beforeEach(() => {
    render(<Table tableData={mockTableDataWithSubheaders} tableOptions={{ hidePaginationControls: true }} />)
  })

  it('Renders horizontal table with pagination and no pagination controls', () => {
    // assert pagination container is visible
    expect(screen.queryByTestId('page-table-pagination-container')).not.toBeInTheDocument()
  })
})

describe('Table With Pagination (Per Page Select Hidden)', () => {
  beforeEach(() => {
    render(<Table tableData={mockTableDataWithSubheaders} tableOptions={{ hidePerPageOptions: true }} />)
  })

  it('Renders horizontal table with pagination and no per page options select', () => {
    // assert pagination container is visible
    expect(screen.queryByTestId('paged-table-per-page-select')).not.toBeInTheDocument()
  })
})
