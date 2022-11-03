import { render, screen, within } from '@testing-library/react'
import Table from '@ltht-react/table'
import { mockTableData, mockTableDataWithSubheaders } from './table.mockdata'

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
