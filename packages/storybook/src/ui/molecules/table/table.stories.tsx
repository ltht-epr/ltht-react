import Table from '@ltht-react/table'
import { Story } from '@storybook/react'
import { mockTableData, mockTableDataWithSubheaders, mockTableDataWithSubrows } from './table.mockdata'

export const SimpleTable: Story = () => <Table tableData={mockTableData} />

export const TableWithSubheaders: Story = () => <Table tableData={mockTableDataWithSubheaders} />

export const TableWithSubrows: Story = () => <Table tableData={mockTableDataWithSubrows} />

export default { title: 'UI/Molecules/Table' }
