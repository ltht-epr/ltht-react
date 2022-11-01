import { render, screen } from '@testing-library/react'
import { GenericTable } from '@ltht-react/table'
import {
  mockMappingMethodHorizontalWithCellCustomisation,
  mockMappingMethodHorizontalWithHeaderCustomisation,
  mockMappingMethodVerticalWithCellCustomisation,
  mockSummaryDefinition,
  mockSummaryRecordsList,
} from './generic-table.mockdata'

describe('Generic Table', () => {
  it('Renders horizontally with cell customisation', () => {
    render(
      <GenericTable
        headerAxis="x"
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
        headerAxis="y"
        columnData={mockSummaryDefinition}
        rowData={mockSummaryRecordsList}
        mapToTableData={mockMappingMethodVerticalWithCellCustomisation}
      />
    )

    expect(screen.getByTestId('color-box-blue')).toBeVisible()
    expect(screen.getByTestId('color-box-green')).toBeVisible()
  })

  it('Renders horizontally with header customisation', () => {
    render(
      <GenericTable
        headerAxis="x"
        columnData={mockSummaryDefinition}
        rowData={mockSummaryRecordsList}
        mapToTableData={mockMappingMethodHorizontalWithHeaderCustomisation}
      />
    )

    expect(screen.getByTestId('record-date-header')).toBeVisible()
  })
})
