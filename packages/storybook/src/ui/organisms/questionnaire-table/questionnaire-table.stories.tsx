import { Story } from '@storybook/react'
import { QuestionnaireTable } from '@ltht-react/table'
import { summaryDefinition, summaryRecordsList, adminActionsForForms } from './questionnaire-table.fixtures'
import { mockAdminActionsForForms } from './questionnaire-table.mockdata'

export const VerticalTable: Story = () => (
  <QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} staticColumns={2} />
)

export const VerticalTableWithAdminActions: Story = () => (
  <QuestionnaireTable
    definition={summaryDefinition}
    records={summaryRecordsList}
    adminActions={adminActionsForForms}
    staticColumns={2}
  />
)

export const HorizontalTable: Story = () => (
  <QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} headerAxis="x" staticColumns={2} />
)

export const HorizontalTableAdminActions: Story = () => (
  <QuestionnaireTable
    definition={summaryDefinition}
    records={summaryRecordsList}
    headerAxis="x"
    adminActions={adminActionsForForms}
    staticColumns={2}
  />
)

export const VerticalTableWithPagination: Story = () => (
  <QuestionnaireTable
    tableOptions={{ enablePagination: true, serverSidePagination: true, pageSize: 1, perPageOptions: [1, 10, 20] }}
    staticColumns={2}
    fetchData={(options) =>
      new Promise((res) =>
        res({
          definition: summaryDefinition,
          records: summaryRecordsList.slice(
            options.pageIndex * options.pageSize,
            (options.pageIndex + 1) * options.pageSize
          ),
          totalCount: summaryRecordsList.length ?? 0,
          adminActions: mockAdminActionsForForms,
        })
      )
    }
  />
)

export default { title: 'UI/Organisms/QuestionnaireTable' }
