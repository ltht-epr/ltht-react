import { render, screen, within } from '@testing-library/react'
import Table from '@ltht-react/table'
import { mockTableData, mockTableDataWithSubheaders } from './table.mockdata'

describe('Table', () => {
  it('Renders', () => {
    render(<Table tableData={mockTableData} />)

    expect(screen.getByRole('table')).toBeVisible()
  })

  it('Renders horizontal table with multiple row headers', () => {
    render(<Table tableData={mockTableDataWithSubheaders} />)

    // assert that first row of headers has 3 headers
    expect(within(screen.getAllByRole('row')[0]).getAllByRole('columnheader')).toHaveLength(3)

    // assert that second row of headers has 4 headers
    expect(within(screen.getAllByRole('row')[1]).getAllByRole('columnheader')).toHaveLength(4)
  })

  it('Renders horizontal table with two data rows', () => {
    render(<Table tableData={mockTableData} />)

    expect(screen.getAllByRole('rowgroup')[0].children.length).toBe(2)
  })
})
