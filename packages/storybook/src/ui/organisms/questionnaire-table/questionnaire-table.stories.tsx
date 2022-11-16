import { Story } from '@storybook/react'
import { QuestionnaireTable } from '@ltht-react/table'
import { summaryDefinition, summaryRecordsList, adminActionsForForms } from './questionnaire-table.fixtures'

export const VerticalTable: Story = () => (
  <QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} stickColumns={2} />
)

export const VerticalTableWithAdminActions: Story = () => (
  <QuestionnaireTable
    definition={summaryDefinition}
    records={summaryRecordsList}
    adminActions={adminActionsForForms}
    stickColumns={2}
  />
)

export const HorizontalTable: Story = () => (
  <QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} headerAxis="x" stickColumns={2} />
)

export const HorizontalTableAdminActions: Story = () => (
  <QuestionnaireTable
    definition={summaryDefinition}
    records={summaryRecordsList}
    headerAxis="x"
    adminActions={adminActionsForForms}
    stickColumns={2}
  />
)

export default { title: 'UI/Organisms/QuestionnaireTable' }
