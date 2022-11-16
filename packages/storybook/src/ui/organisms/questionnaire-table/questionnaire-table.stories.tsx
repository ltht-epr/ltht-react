import { Story } from '@storybook/react'
import { QuestionnaireTable } from '@ltht-react/table'
import { summaryDefinition, summaryRecordsList, adminActionsForForms } from './questionnaire-table.fixtures'

export const VerticalTable: Story = () => (
  <QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} />
)

export const VerticalTableWithAdminActions: Story = () => (
  <QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} adminActions={adminActionsForForms} />
)

export const HorizontalTable: Story = () => (
  <QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} headerAxis="x" />
)

export const HorizontalTableAdminActions: Story = () => (
  <QuestionnaireTable
    definition={summaryDefinition}
    records={summaryRecordsList}
    headerAxis="x"
    adminActions={adminActionsForForms}
  />
)

export default { title: 'UI/Organisms/QuestionnaireTable' }
