import { render, screen } from '@testing-library/react'
import Table from '@ltht-react/table'
import { mockSummaryDefinition, mockSummaryRecordsList, mockTableDataSingleColAndRow } from './table.mockdata'
import { summaryDefinition, summaryRecordsList } from './table.fixtures'

describe('Table', () => {
  it('Renders', () => {
    const mockMappingFunction = jest.fn()
    mockMappingFunction.mockReturnValueOnce(mockTableDataSingleColAndRow)
    render(
      <Table
        columnData={mockSummaryDefinition.item}
        rowData={summaryRecordsList}
        mapToTableData={mockMappingFunction}
      />
    )

    expect(screen.getByRole('table')).toBeVisible()
    expect(mockMappingFunction.mock.calls.length).toBe(1)
  })

  it('Presents warning text if definition item array is undefined', () => {
    const summaryDefinitionWithoutItems = { ...mockSummaryDefinition, item: undefined }

    render(<Table columnData={summaryDefinitionWithoutItems} rowData={mockSummaryRecordsList} />)

    expect(screen.getByText('Could not render table. Definition items array was empty.')).toBeVisible()
  })

  it('Presents warning text if definition item array is empty', () => {
    const summaryDefinitionWithoutItems = { ...mockSummaryDefinition, item: [] }

    render(<Table columnData={summaryDefinitionWithoutItems} rowData={mockSummaryRecordsList} />)

    expect(screen.getByText('Could not render table. Definition items array was empty.')).toBeVisible()
  })

  it('Renders Horizontally', () => {
    render(<Table columnData={summaryDefinition} rowData={summaryRecordsList} />)
  })
})
