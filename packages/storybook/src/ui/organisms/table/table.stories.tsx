import { Story } from '@storybook/react'
import Table, { GenericTable } from '@ltht-react/table'
import { summaryDefinition, summaryRecordsList } from './table.fixtures'
import {
  mockMappingMethodHorizontalWithCellCustomisation,
  mockMappingMethodVerticalWithCellCustomisation,
  mockSummaryDefinition,
  mockSummaryRecordsList,
} from './table.mockdata'

export const VerticalTable: Story = () => <Table definition={summaryDefinition} records={summaryRecordsList} />
export const HorizontalTable: Story = () => (
  <Table definition={summaryDefinition} records={summaryRecordsList} orientation="HORIZONTAL" />
)
export const MockDataVisualisation: Story = () => (
  <Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} />
)
export const MockDataVisualisationHorizontal: Story = () => (
  <Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} orientation="HORIZONTAL" />
)

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

export default { title: 'UI/Organisms/Table' }
