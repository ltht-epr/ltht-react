import Table from '@ltht-react/table'
import { Story } from '@storybook/react'
import {
  mockTableData,
  mockTableDataWithSubheaders,
  mockTableDataWithSubrows,
  mockTableDataWithCustomComponent,
} from './table.mockdata'

export const SimpleTable: Story = () => <Table tableData={mockTableData} />

export const TableWithSubheaders: Story = () => <Table tableData={mockTableDataWithSubheaders} />

export const TableWithSubrows: Story = () => <Table tableData={mockTableDataWithSubrows} />

export const TableWithScrollbar: Story = () => (
  <div style={{ maxWidth: '200px', height: '100px' }}>
    <Table tableData={mockTableData} />
  </div>
)

export const TableWithCustomisedCell: Story = () => <Table tableData={mockTableDataWithCustomComponent} />

export default { title: 'UI/Molecules/Table' }
