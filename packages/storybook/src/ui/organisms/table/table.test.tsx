import { render, screen } from '@testing-library/react'
import Table from '@ltht-react/table'
import { mockSummaryDefinition, mockSummaryRecordsList } from './table.mockdata'

describe('Table', () => {
  it('Renders', () => {
    render(<Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} />)
  })

  it('Presents warning text if insufficient data is provided', () => {
    const summaryDefinitionWithoutItems = { ...mockSummaryDefinition, item: undefined }

    render(<Table definition={summaryDefinitionWithoutItems} records={mockSummaryRecordsList} />)

    expect(screen.getByText('Could not render table. Definition items array was empty.')).toBeVisible()
  })
})
