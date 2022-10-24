import { render, screen } from '@testing-library/react'
import { GenericTable } from '@ltht-react/table'
import {
  mockMappingMethodHorizontalWithCellCustomisation,
  mockMappingMethodVerticalWithCellCustomisation,
  mockSummaryDefinition,
  mockSummaryRecordsList,
} from './generic-table.mockdata'

describe('Table', () => {
  it('Renders horizontally with cell customisation', () => {
    render(
      <GenericTable
        orientation="HORIZONTAL"
        columnData={mockSummaryDefinition}
        rowData={mockSummaryRecordsList}
        mapToTableData={mockMappingMethodHorizontalWithCellCustomisation}
      />
    )

    expect(screen.getByTestId('color-box-blue')).toBeVisible()
    expect(screen.getByTestId('color-box-green')).toBeVisible()
  })

  it('Renders vertically with cell customisation', () => {
    render(
      <GenericTable
        orientation="VERTICAL"
        columnData={mockSummaryDefinition}
        rowData={mockSummaryRecordsList}
        mapToTableData={mockMappingMethodVerticalWithCellCustomisation}
      />
    )

    expect(screen.getByTestId('color-box-blue')).toBeVisible()
    expect(screen.getByTestId('color-box-green')).toBeVisible()
  })
})
