import { Story } from '@storybook/react'
import { QuestionnaireTable } from '@ltht-react/table'
import { summaryDefinition, summaryRecordsList } from './questionnaire-table.fixtures'

export const VerticalTable: Story = () => (
  <QuestionnaireTable
    definition={summaryDefinition}
    records={summaryRecordsList}
    tableOptions={{ showExpanderColumn: true }}
  />
)
export const HorizontalTable: Story = () => (
  <QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} headerAxis="x" />
)

export default { title: 'UI/Organisms/QuestionnaireTable' }
