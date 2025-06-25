import { render, screen } from '@testing-library/react'
import Table, { GenericTable } from '@ltht-react/table'
import { mockMapper, mockSummaryDefinition, mockSummaryRecordsList } from './generic-table.mockdata'

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }))

describe('Generic Table', () => {
  it('Renders', () => {
    render(
      <GenericTable columnData={mockSummaryDefinition} rowData={mockSummaryRecordsList} mapToTableData={mockMapper} />
    )
  })

  it('Calls the mapping method with the data given', () => {
    const mockMappingMethod = jest.fn().mockImplementation(mockMapper)

    render(
      <GenericTable
        columnData={mockSummaryDefinition}
        rowData={mockSummaryRecordsList}
        mapToTableData={mockMappingMethod}
      />
    )

    expect(mockMappingMethod).toHaveBeenCalledTimes(1)
    expect(mockMappingMethod).toHaveBeenCalledWith(mockSummaryDefinition, mockSummaryRecordsList)
  })

  it('Renders the same HTML as it would if given the TableData directly', () => {
    const tableRenderedWithMapper = render(
      <GenericTable
        columnData={mockSummaryDefinition}
        rowData={mockSummaryRecordsList}
        mapToTableData={mockMapper}
        headerAxis="x"
      />
    ).asFragment()

    const tableRenderedWithTableData = render(
      <Table tableData={mockMapper(mockSummaryDefinition, mockSummaryRecordsList)} headerAxis="x" />
    ).asFragment()

    expect(tableRenderedWithMapper).toEqual(tableRenderedWithTableData)
  })
})

describe('Generic Table with id prop', () => {
  it('Renders with id prop', () => {
    render(
      <GenericTable
        columnData={mockSummaryDefinition}
        rowData={mockSummaryRecordsList}
        mapToTableData={mockMapper}
        id="generic-table"
      />
    )

    expect(screen.getByRole('table')).toHaveAttribute('id', 'generic-table')
  })

  it('Renders without id prop', () => {
    render(
      <GenericTable columnData={mockSummaryDefinition} rowData={mockSummaryRecordsList} mapToTableData={mockMapper} />
    )

    expect(screen.getByRole('table')).not.toHaveAttribute('id')
  })

  it('Renders header and row cells with id attributes when id prop is set', () => {
    render(
      <GenericTable
        columnData={mockSummaryDefinition}
        rowData={mockSummaryRecordsList}
        mapToTableData={mockMapper}
        id="generic-table"
      />
    )

    const headers = screen.getAllByRole('columnheader')
    const cells = screen.getAllByRole('cell')

    expect(headers.every((header) => header.hasAttribute('id'))).toBe(true)
    expect(cells.every((cell) => cell.hasAttribute('id'))).toBe(true)
  })
})
