import { Story } from '@storybook/react'
import { QuestionnaireTable } from '@ltht-react/table'
import {
  obsDefinition,
  obsRecordsList,
  obsAdminActionsForForms,
  axialRecordsList,
  axialDefinition,
  axialAdminActionsForForms,
} from './questionnaire-table.fixtures'

export const ObservationsVerticalTable: Story = () => (
  <QuestionnaireTable definition={obsDefinition} records={obsRecordsList} staticColumns={2} />
)

export const AxialVerticalTable: Story = () => (
  <QuestionnaireTable definition={axialDefinition} records={axialRecordsList} staticColumns={2} />
)

export const ObservationsVerticalTableWithAdminActions: Story = () => (
  <QuestionnaireTable
    definition={obsDefinition}
    records={obsRecordsList}
    adminActions={obsAdminActionsForForms}
    staticColumns={2}
  />
)

export const AxialVerticalTableWithAdminActions: Story = () => (
  <QuestionnaireTable
    definition={axialDefinition}
    records={axialRecordsList}
    adminActions={axialAdminActionsForForms}
    staticColumns={2}
  />
)

export const ObservationsHorizontalTable: Story = () => (
  <QuestionnaireTable definition={obsDefinition} records={obsRecordsList} headerAxis="x" staticColumns={2} />
)

export const AxialHorizontalTable: Story = () => (
  <QuestionnaireTable definition={axialDefinition} records={axialRecordsList} headerAxis="x" staticColumns={2} />
)

export const ObservationsHorizontalTableAdminActions: Story = () => (
  <QuestionnaireTable
    definition={obsDefinition}
    records={obsRecordsList}
    headerAxis="x"
    adminActions={obsAdminActionsForForms}
    staticColumns={2}
  />
)

export const AxialHorizontalTableAdminActions: Story = () => (
  <QuestionnaireTable
    definition={axialDefinition}
    records={axialRecordsList}
    headerAxis="x"
    adminActions={axialAdminActionsForForms}
    staticColumns={2}
  />
)

export default { title: 'UI/Organisms/QuestionnaireTable' }
