import { Story } from '@storybook/react'
import { GenericTable } from '@ltht-react/table'
import { mockMapper, mockSummaryDefinition, mockSummaryRecordsList } from './generic-table.mockdata'

export const TableCreatedWithGenericData: Story = () => (
  <GenericTable
    headerAxis="y"
    columnData={mockSummaryDefinition}
    rowData={mockSummaryRecordsList}
    mapToTableData={mockMapper}
  />
)

export default { title: 'UI/Organisms/GenericTable' }
