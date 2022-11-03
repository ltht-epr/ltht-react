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
    headerAxis="y"
    columnData={mockSummaryDefinition}
    rowData={mockSummaryRecordsList}
    mapToTableData={mockMappingMethodVerticalWithCellCustomisation}
  />
)

export const MockDataVisualisationHorizontalWithCellCustomisation: Story = () => (
  <GenericTable
    headerAxis="x"
    columnData={mockSummaryDefinition}
    rowData={mockSummaryRecordsList}
    mapToTableData={mockMappingMethodHorizontalWithCellCustomisation}
  />
)

export const MockDataVisualisationHorizontalWithHeaderCustomisation: Story = () => (
  <GenericTable
    headerAxis="x"
    columnData={mockSummaryDefinition}
    rowData={mockSummaryRecordsList}
    mapToTableData={mockMappingMethodHorizontalWithHeaderCustomisation}
  />
)

export default { title: 'UI/Organisms/GenericTable' }
