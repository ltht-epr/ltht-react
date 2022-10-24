import { Story } from '@storybook/react'
import Table from '@ltht-react/table'
import { summaryDefinition, summaryRecordsList } from './table.fixtures'
import { mockSummaryDefinition, mockSummaryRecordsList } from './table.mockdata'

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

export default { title: 'UI/Organisms/Table' }
