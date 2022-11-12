import Table, { ReFactoredTable } from '@ltht-react/table'
import { Story } from '@storybook/react'
import { mockTableData, mockTableDataWithSubheaders, mockTableDataWithSubrows } from './table.mockdata'
import { mockTableDataRefactored, mockTableDataWithSubheadersRefactored } from './table.mockdata.refactored'

export const SimpleTable: Story = () => <Table tableData={mockTableData} />

export const TableWithSubheaders: Story = () => <Table tableData={mockTableDataWithSubheaders} />

export const TableWithSubrows: Story = () => <Table tableData={mockTableDataWithSubrows} />

export const TableWithScrollbar: Story = () => (
  <div style={{ maxWidth: '200px', height: '100px' }}>
    <Table tableData={mockTableData} />
  </div>
)

export const RefactoredSimpleTable: Story = () => <ReFactoredTable tableData={mockTableDataRefactored} />

export const RefactoredTableWithSubheaders: Story = () => (
  <ReFactoredTable tableData={mockTableDataWithSubheadersRefactored} />
)

export default { title: 'UI/Molecules/Table' }
