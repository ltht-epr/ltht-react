import { Story } from '@storybook/react'
import Table from '@ltht-react/table'
import {
  mockSummaryDefinition,
  mockSummaryRecordsList,
  summaryDefinition,
  summaryRecordsList,
} from './questionnaire-table.mockdata'

export const MockDataVisualisation: Story = () => (
  <Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} />
)
export const MockDataVisualisationHorizontal: Story = () => (
  <Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} orientation="HORIZONTAL" />
)

export const MockDataVisualisationVerticalWithGrouping: Story = () => (
  <Table definition={summaryDefinition} records={summaryRecordsList} />
)

export const MockDataVisualisationVerticalTableWithScroll: Story = () => (
  <div style={{ maxWidth: '600px', height: '100px' }}>
    <Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} />
  </div>
)

export default { title: 'UI/Molecules/QuestionnaireTable' }
