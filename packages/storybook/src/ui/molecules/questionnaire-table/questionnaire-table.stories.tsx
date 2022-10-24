import { Story } from '@storybook/react'
import Table from '@ltht-react/table'
import { mockSummaryDefinition, mockSummaryRecordsList } from './questionnaire-table.mockdata'

export const MockDataVisualisation: Story = () => (
  <Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} />
)
export const MockDataVisualisationHorizontal: Story = () => (
  <Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} orientation="HORIZONTAL" />
)

export default { title: 'UI/Molecules/QuestionnaireTable' }
