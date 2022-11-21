import { render } from '@testing-library/react'
import Table, { GenericTable } from '@ltht-react/table'
import { mockMapper, mockSummaryDefinition, mockSummaryRecordsList } from './generic-table.mockdata'

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
