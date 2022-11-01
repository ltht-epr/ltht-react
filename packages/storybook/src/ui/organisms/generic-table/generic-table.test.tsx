import { render, screen } from '@testing-library/react'
import Table, { GenericTable } from '@ltht-react/table'
import {
  mockMappingMethodHorizontalWithCellCustomisation,
  mockMappingMethodHorizontalWithHeaderCustomisation,
  mockMappingMethodVerticalWithCellCustomisation,
  mockSummaryDefinition,
  mockSummaryRecordsList,
} from './generic-table.mockdata'

describe('Generic Table', () => {
  it('Renders', () => {
    render(
      <GenericTable
        headerAxis="x"
        columnData={mockSummaryDefinition}
        rowData={mockSummaryRecordsList}
        mapToTableData={mockMappingMethodHorizontalWithCellCustomisation}
      />
    )
  })

  it('Calls the mapping method with the data given', () => {
    const mockMappingMethod = jest.fn().mockImplementation(mockMappingMethodHorizontalWithCellCustomisation)

    render(
      <GenericTable
        headerAxis="x"
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
        headerAxis="x"
        columnData={mockSummaryDefinition}
        rowData={mockSummaryRecordsList}
        mapToTableData={mockMappingMethodHorizontalWithCellCustomisation}
      />
    ).asFragment()

    const tableRenderedWithTableData = render(
      <Table
        tableData={mockMappingMethodHorizontalWithCellCustomisation(mockSummaryDefinition, mockSummaryRecordsList)}
      />
    ).asFragment()

    expect(tableRenderedWithMapper).toEqual(tableRenderedWithTableData)
  })

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
