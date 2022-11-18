import Table from '@ltht-react/table'
import { TableData } from '@ltht-react/table/src'
import { Story } from '@storybook/react'
import { useEffect, useState } from 'react'
import {
  mockTableData,
  mockTableDataWithSubheaders,
  mockTableDataWithSubrows,
  mockTableDataWithCustomComponent,
  mockTableDataForPagination,
  mockTableDataForVerticalPagination,
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

export const TableWithPagination: Story = () => (
  <div style={{ height: '400px' }}>
    <Table tableData={mockTableDataForPagination} staticColumns={1} pageSize={10} currentPage={1} headerAxis="x" />
  </div>
)

export const VeritcalTableWithPagination: Story = () => (
  <div style={{ height: '400px' }}>
    <Table
      tableData={mockTableDataForVerticalPagination}
      staticColumns={1}
      pageSize={10}
      currentPage={1}
      headerAxis="y"
    />
  </div>
)

export default { title: 'UI/Molecules/Table' }
