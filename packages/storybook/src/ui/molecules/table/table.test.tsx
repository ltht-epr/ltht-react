import { fireEvent, render, screen, within } from '@testing-library/react'
import Table, { TableData } from '@ltht-react/table'
import userEvent from '@testing-library/user-event'
import {
  mockTableData,
  mockTableDataForPagination,
  mockTableDataForVerticalPagination,
  mockTableDataWithCustomComponent,
  mockTableDataWithSubheaders,
} from './table.mockdata'

const getHeaders = () => within(screen.getAllByRole('rowgroup')[0])
const getDataCells = () => within(screen.getAllByRole('rowgroup')[1])
const getFirstHeaderRow = () => within(getHeaders().getAllByRole('row')[0])
const getSecondHeaderRow = () => within(getHeaders().getAllByRole('row')[1])

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }))

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

describe('Component overrride', () => {
  it('Allows for custom rendering', () => {
    render(<Table tableData={mockTableDataWithCustomComponent} />)

    expect(screen.getByRole('button', { name: 'This cell is customised' })).toBeVisible()
  })
})

// TODO: move these test to cypress testing when its setup
describe('Table with infinite scroll pagination (x)', () => {
  it('navigates to next page using the button when scroll is not available', () => {
    render(
      <div style={{ maxHeight: '400px' }}>
        <Table tableData={mockTableDataForPagination} />
      </div>
    )

    expect(screen.getAllByRole('row').length).toEqual(11)

    userEvent.click(screen.getByRole('button'))

    expect(screen.getAllByRole('row').length).toEqual(21)
  })

  it('navigates to next page using the scroll when scroll is available', () => {
    render(
      <div style={{ maxHeight: '200px' }}>
        <Table tableData={mockTableDataForPagination} />
      </div>
    )

    expect(screen.getAllByRole('row').length).toEqual(11)

    fireEvent.scroll(screen.getByRole('table').parentElement as HTMLElement, { target: { scrollY: 100 } })

    expect(screen.getAllByRole('row').length).toEqual(21)

    fireEvent.scroll(screen.getByRole('table').parentElement as HTMLElement, { target: { scrollY: 100 } })

    expect(screen.getAllByRole('row').length).toEqual(31)
  })
})

// TODO: move these test to cypress testing when its setup
describe('Table with infinite scroll pagination (y)', () => {
  it('navigates to next page using the button when scroll is not available', () => {
    render(
      <div style={{ maxWidth: '100%' }}>
        <Table tableData={mockTableDataForVerticalPagination} headerAxis="y" />
      </div>
    )

    expect(screen.getAllByRole('columnheader').length).toEqual(11)

    userEvent.click(screen.getByRole('button'))

    expect(screen.getAllByRole('columnheader').length).toEqual(21)
  })

  it('navigates to next page using the scroll when scroll is available', () => {
    render(
      <div style={{ maxWidth: '1050px' }}>
        <Table tableData={mockTableDataForVerticalPagination} headerAxis="y" />
      </div>
    )

    expect(screen.getAllByRole('columnheader').length).toEqual(11)

    fireEvent.scroll(screen.getByRole('table').parentElement as HTMLElement, { target: { scrollX: 100 } })

    expect(screen.getAllByRole('columnheader').length).toEqual(21)

    fireEvent.scroll(screen.getByRole('table').parentElement as HTMLElement, { target: { scrollX: 100 } })

    expect(screen.getAllByRole('columnheader').length).toEqual(31)
  })
})

// TODO: move these test to cypress testing when its setup
describe('Table with infinite scroll pagination (x) [MANUAL]', () => {
  const getPaginatedData = (pageIndex: number, pageSize: number): TableData => ({
    headers: mockTableDataForPagination.headers,
    rows: mockTableDataForPagination.rows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
  })

  it('navigates to next page using the button (NOT keeping previous data)', async () => {
    const mockNextPageHandler = jest.fn(() => null)
    const mockGetCanNextPageHandler = jest.fn(() => true)

    const getTable = (pageIndex: number) => (
      <div style={{ height: '400px' }}>
        <Table
          tableData={getPaginatedData(pageIndex, 10)}
          nextPage={mockNextPageHandler}
          getCanNextPage={mockGetCanNextPageHandler}
          headerAxis="x"
          manualPagination
          keepPreviousData={false}
        />
      </div>
    )

    const { rerender } = render(getTable(0))

    expect(screen.getAllByRole('row').length).toEqual(11)

    userEvent.click(screen.getByRole('button'))

    rerender(getTable(1))

    expect(within(screen.getByRole('table')).getAllByRole('row').length).toEqual(11)

    expect(mockGetCanNextPageHandler).toHaveBeenCalled()
    expect(mockNextPageHandler).toHaveBeenCalled()
  })

  it('navigates to next page using the button when scroll is not available', async () => {
    const mockNextPageHandler = jest.fn(() => null)
    const mockGetCanNextPageHandler = jest.fn(() => true)

    const getTable = (pageIndex: number) => (
      <div style={{ height: '400px' }}>
        <Table
          tableData={getPaginatedData(pageIndex, 10)}
          nextPage={mockNextPageHandler}
          getCanNextPage={mockGetCanNextPageHandler}
          headerAxis="x"
          manualPagination
          keepPreviousData
        />
      </div>
    )

    const { rerender } = render(getTable(0))

    expect(screen.getAllByRole('row').length).toEqual(11)

    userEvent.click(screen.getByRole('button'))

    rerender(getTable(1))

    expect(within(screen.getByRole('table')).getAllByRole('row').length).toEqual(21)

    expect(mockGetCanNextPageHandler).toHaveBeenCalled()
    expect(mockNextPageHandler).toHaveBeenCalled()
  })

  it('navigates to next page using the scroll when scroll is available', () => {
    const mockNextPageHandler = jest.fn(() => null)
    const mockGetCanNextPageHandler = jest.fn(() => true)

    const getTable = (pageIndex: number) => (
      <div style={{ height: '200px' }}>
        <Table
          tableData={getPaginatedData(pageIndex, 10)}
          nextPage={mockNextPageHandler}
          getCanNextPage={mockGetCanNextPageHandler}
          headerAxis="x"
          manualPagination
          keepPreviousData
        />
      </div>
    )

    const { rerender } = render(getTable(0))

    expect(screen.getAllByRole('row').length).toEqual(11)

    fireEvent.scroll(screen.getByRole('table').parentElement as HTMLElement, { target: { scrollY: 100 } })

    rerender(getTable(1))

    expect(screen.getAllByRole('row').length).toEqual(21)

    fireEvent.scroll(screen.getByRole('table').parentElement as HTMLElement, { target: { scrollY: 100 } })

    rerender(getTable(2))

    expect(screen.getAllByRole('row').length).toEqual(31)

    expect(mockGetCanNextPageHandler).toHaveBeenCalled()
    expect(mockNextPageHandler).toHaveBeenCalled()
  })
})

// TODO: move these test to cypress testing when its setup
describe('Table with infinite scroll pagination (y) [MANUAL]', () => {
  const getPaginatedData = (pageIndex: number, pageSize: number): TableData => ({
    headers: [
      mockTableDataForVerticalPagination.headers[0],
      ...mockTableDataForVerticalPagination.headers
        .slice(1, mockTableDataForVerticalPagination.headers.length)
        .slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
    ],
    rows: mockTableDataForVerticalPagination.rows,
  })

  it('navigates to next page using the button (NOT Keeping Previous Data)', () => {
    const mockNextPageHandler = jest.fn(() => null)
    const mockGetCanNextPageHandler = jest.fn(() => true)

    const getTable = (pageIndex: number) => (
      <div style={{ maxWidth: '100%' }}>
        <Table
          tableData={getPaginatedData(pageIndex, 10)}
          nextPage={mockNextPageHandler}
          getCanNextPage={mockGetCanNextPageHandler}
          headerAxis="y"
          manualPagination
          keepPreviousData={false}
        />
      </div>
    )

    const { rerender } = render(getTable(0))

    expect(screen.getAllByRole('columnheader').length).toEqual(11)

    userEvent.click(screen.getByRole('button'))

    rerender(getTable(1))

    expect(screen.getAllByRole('columnheader').length).toEqual(11)

    expect(mockGetCanNextPageHandler).toHaveBeenCalled()
    expect(mockNextPageHandler).toHaveBeenCalled()
  })

  it('navigates to next page using the button when scroll is not available', () => {
    const mockNextPageHandler = jest.fn(() => null)
    const mockGetCanNextPageHandler = jest.fn(() => true)

    const getTable = (pageIndex: number) => (
      <div style={{ maxWidth: '100%' }}>
        <Table
          tableData={getPaginatedData(pageIndex, 10)}
          nextPage={mockNextPageHandler}
          getCanNextPage={mockGetCanNextPageHandler}
          headerAxis="y"
          manualPagination
          keepPreviousData
        />
      </div>
    )

    const { rerender } = render(getTable(0))

    expect(screen.getAllByRole('columnheader').length).toEqual(11)

    userEvent.click(screen.getByRole('button'))

    rerender(getTable(1))

    expect(screen.getAllByRole('columnheader').length).toEqual(21)

    expect(mockGetCanNextPageHandler).toHaveBeenCalled()
    expect(mockNextPageHandler).toHaveBeenCalled()
  })

  it('navigates to next page using the scroll when scroll is available', () => {
    const mockNextPageHandler = jest.fn(() => null)
    const mockGetCanNextPageHandler = jest.fn(() => true)

    const getTable = (pageIndex: number) => (
      <div style={{ maxWidth: '1050px' }}>
        <Table
          tableData={getPaginatedData(pageIndex, 10)}
          nextPage={mockNextPageHandler}
          getCanNextPage={mockGetCanNextPageHandler}
          headerAxis="y"
          manualPagination
          keepPreviousData
        />
      </div>
    )

    const { rerender } = render(getTable(0))

    expect(screen.getAllByRole('columnheader').length).toEqual(11)

    fireEvent.scroll(screen.getByRole('table').parentElement as HTMLElement, { target: { scrollX: 100 } })

    rerender(getTable(1))

    expect(screen.getAllByRole('columnheader').length).toEqual(21)

    fireEvent.scroll(screen.getByRole('table').parentElement as HTMLElement, { target: { scrollX: 100 } })

    rerender(getTable(2))

    expect(screen.getAllByRole('columnheader').length).toEqual(31)

    expect(mockGetCanNextPageHandler).toHaveBeenCalled()
    expect(mockNextPageHandler).toHaveBeenCalled()
  })
})
