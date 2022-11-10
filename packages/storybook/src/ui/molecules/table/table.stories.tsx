import Table, { IFetchDataOptions } from '@ltht-react/table'

import { Story } from '@storybook/react'
import {
  mockTableData,
  mockTableDataForPagination,
  mockTableDataForVerticalPagination,
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
    fetchData={async (options: IFetchDataOptions) => {
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

export const SimpleVerticalPaginatedTable: Story = () => (
  <Table
    tableOptions={{ enablePagination: true, serverSidePagination: true }}
    fetchData={async (options: IFetchDataOptions) =>
      // Simulate some network latency
      new Promise((res) =>
        res({
          tableData: {
            headers: [
              mockTableDataForVerticalPagination.headers[0],
              ...mockTableDataForVerticalPagination.headers
                .slice(1, mockTableDataForVerticalPagination.headers.length)
                .slice(options.pageIndex * options.pageSize, (options.pageIndex + 1) * options.pageSize),
            ],
            rows: mockTableDataForVerticalPagination.rows,
          },
          totalCount: mockTableDataForVerticalPagination.headers.length - 1, // -1 to remove the header column from the total
        })
      )
    }
  />
)

export default { title: 'UI/Molecules/Table' }
