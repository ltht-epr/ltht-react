import Table from '@ltht-react/table'
import { Story } from '@storybook/react'
import {
  mockTableData,
  mockTableDataForPagination,
  mockTableDataWithSubheaders,
  mockTableDataWithSubrows,
} from './table.mockdata'

export const SimpleTable: Story = () => <Table tableData={mockTableData} />

export const TableWithSubheaders: Story = () => <Table tableData={mockTableDataWithSubheaders} />

export const TableWithSubrows: Story = () => (
  <Table tableData={mockTableDataWithSubrows} tableOptions={{ showExpanderColumn: true }} />
)

export const TableWithScrollbar: Story = () => (
  <div style={{ maxWidth: '200px', height: '100px' }}>
    <Table tableData={mockTableData} />
  </div>
)

export const SimplePaginatedTable: Story = () => (
  <Table tableData={mockTableDataForPagination} tableOptions={{ enablePagination: true }} />
)

export const SimpleServerSidePaginatedTable: Story = () => (
  <Table
    tableData={mockTableDataForPagination}
    tableOptions={{ enablePagination: true, serverSidePagination: true }}
    fetchData={async (options) => {
      // Simulate some network latency
      await new Promise((r) => setTimeout(r, 500))
      return new Promise((res) =>
        res({
          tableData: {
            headers: mockTableDataForPagination.headers,
            rows: mockTableDataForPagination.rows.slice(
              options.pageIndex * options.pageSize,
              (options.pageIndex + 1) * options.pageSize
            ),
          },
          totalCount: mockTableDataForPagination.rows.length,
        })
      )
    }}
  />
)

export default { title: 'UI/Molecules/Table' }
