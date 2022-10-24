import { Story } from '@storybook/react'
import { GenericTable } from '@ltht-react/table'
import {
  mockMappingMethodHorizontalWithCellCustomisation,
  mockMappingMethodHorizontalWithHeaderCustomisation,
  mockMappingMethodVerticalWithCellCustomisation,
  mockSummaryDefinition,
  mockSummaryRecordsList,
} from './generic-table.mockdata'

export const MockDataVisualisationVerticalWithCellCustomisation: Story = () => (
  <GenericTable
    columnData={mockSummaryDefinition}
    rowData={mockSummaryRecordsList}
    mapToTableData={mockMappingMethodVerticalWithCellCustomisation}
  />
)

export const MockDataVisualisationHorizontalWithCellCustomisation: Story = () => (
  <GenericTable
    orientation="HORIZONTAL"
    columnData={mockSummaryDefinition}
    rowData={mockSummaryRecordsList}
    mapToTableData={mockMappingMethodHorizontalWithCellCustomisation}
  />
)

export const MockDataVisualisationHorizontalWithHeaderCustomisation: Story = () => (
  <GenericTable
    orientation="HORIZONTAL"
    columnData={mockSummaryDefinition}
    rowData={mockSummaryRecordsList}
    mapToTableData={mockMappingMethodHorizontalWithHeaderCustomisation}
  />
)

export default { title: 'UI/Molecules/GenericTable' }
