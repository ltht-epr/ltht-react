import { render, screen } from '@testing-library/react'
import Table from '@ltht-react/table'
import { mockSummaryDefinition, mockSummaryRecordsList } from './table.mockdata'
import { summaryDefinition, summaryRecordsList } from './table.fixtures'

describe('Table', () => {
  it('Renders', () => {
    render(<Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} />)

    expect(screen.getByRole('table')).toBeVisible()
  })

  it('Presents warning text if definition item array is undefined', () => {
    const summaryDefinitionWithoutItems = { ...mockSummaryDefinition, item: undefined }

    render(<Table definition={summaryDefinitionWithoutItems} records={mockSummaryRecordsList} />)

    expect(screen.getByText('Could not render table. Definition items array was empty.')).toBeVisible()
  })

  it('Presents warning text if definition item array is empty', () => {
    const summaryDefinitionWithoutItems = { ...mockSummaryDefinition, item: [] }

    render(<Table definition={summaryDefinitionWithoutItems} records={mockSummaryRecordsList} />)

    expect(screen.getByText('Could not render table. Definition items array was empty.')).toBeVisible()
  })

  it('Renders Horizontally', () => {
    render(<Table definition={summaryDefinition} records={summaryRecordsList} orientation="HORIZONTAL" />)
    
  })
})
