import Table, { IFetchDataOptions } from '@ltht-react/table'

import { Story } from '@storybook/react'
import {
  mockTableData,
  mockTableDataForPagination,
  mockTableDataForVerticalPagination,
  mockTableDataWithSubheaders,
  mockTableDataWithSubrows,
} from './table.mockdata'

const fontStyle = { fontFamily: 'sans-serif' }
const paragraphStyle = { marginTop: 5, fontSize: 14 }

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
  <>
    <b style={{ ...fontStyle }}>Simple paginated table with flexible width</b>
    <div style={{ width: '100%', marginTop: 10 }}>
      <Table tableData={mockTableDataForPagination} tableOptions={{ enablePagination: true }} />
    </div>
    <br />
    <b style={{ ...fontStyle }}>Simple paginated table with fixed width</b>
    <p style={{ ...fontStyle, ...paragraphStyle }}>
      stops the pagination controls shifting when table data expands and shrinks
    </p>
    <div style={{ maxWidth: '650px', marginTop: 10 }}>
      <Table tableData={mockTableDataForPagination} tableOptions={{ enablePagination: true }} />
    </div>
  </>
)

export const ServerSidePaginatedTable: Story = () => (
  <>
    <b style={{ ...fontStyle }}>Server side paginated table</b>
    <p style={{ ...fontStyle, ...paragraphStyle }}>
      Table data is optional for serverside pagination, the table retreives the data using the fetchData function
      defined by the client.
    </p>
    <Table
      tableOptions={{ enablePagination: true, serverSidePagination: true }}
      fetchData={async (options: IFetchDataOptions) => {
        // Simulate some network latency
        await new Promise((r) => setTimeout(r, 500))
        throw new Error('Hello World!')
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
  </>
)

export const SimpleVerticalPaginatedTable: Story = () => (
  <>
    <b style={{ ...fontStyle }}>Vertical paginated table</b>
    <p style={{ ...fontStyle, ...paragraphStyle }}>
      Client-side pagination does not support Vertical pagination by react table. In order to acheive the same results
      and paginate vertical tables is to use server side fetchData function and paginate headers rather than rows to
      achieve the pagination result.
    </p>
    <Table
      tableOptions={{ enablePagination: true, serverSidePagination: true }}
      fetchData={async (options: IFetchDataOptions) =>
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
  </>
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
