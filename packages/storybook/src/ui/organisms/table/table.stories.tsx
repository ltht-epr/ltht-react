import { Story } from '@storybook/react'
import Table from '@ltht-react/table'
import { summaryDefinition, summaryRecordsList } from './table.fixtures'

export const VerticalTable: Story = () => <Table definition={summaryDefinition} records={summaryRecordsList} />
export const HorizontalTable: Story = () => (
  <Table definition={summaryDefinition} records={summaryRecordsList} orientation="HORIZONTAL" />
)

export default { title: 'UI/Organisms/Table' }
