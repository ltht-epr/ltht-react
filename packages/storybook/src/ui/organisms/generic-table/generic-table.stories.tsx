import { Story } from '@storybook/react'
import { GenericTable } from '@ltht-react/table'
import {
  mockMappingMethodHorizontalWithCellCustomisation,
  mockMappingMethodHorizontalWithHeaderCustomisation,
  mockMappingMethodVerticalWithCellCustomisation,
  mockSummaryDefinition,
  mockSummaryRecordsList,
  mockSummaryRecordsListForPagination,
} from './generic-table.mockdata'

const fontStyle = { fontFamily: 'sans-serif' }
const paragraphStyle = { marginTop: 5, fontSize: 14 }

export const MockDataVisualisationVerticalWithCellCustomisation: Story = () => (
  <GenericTable
    headerAxis="y"
    columnData={mockSummaryDefinition}
    rowData={mockSummaryRecordsList}
    mapToTableData={mockMappingMethodVerticalWithCellCustomisation}
  />
)

export const MockDataVisualisationHorizontalWithCellCustomisation: Story = () => (
  <>
    <b style={{ ...fontStyle }}>Horizontal table with cell customisation</b>
    <p style={{ ...fontStyle, ...paragraphStyle }}>
      &apos;What is your favourite colour?&apos; each cell under the header shows a colour box next to the text colour
    </p>
    <GenericTable
      headerAxis="x"
      columnData={mockSummaryDefinition}
      rowData={mockSummaryRecordsList}
      mapToTableData={mockMappingMethodHorizontalWithCellCustomisation}
    />
  </>
)

export const MockDataVisualisationHorizontalWithHeaderCustomisation: Story = () => (
  <>
    <b style={{ ...fontStyle }}>Horizontal table with JSX header</b>
    <p style={{ ...fontStyle, ...paragraphStyle }}>Record date header using a JSX element rather than text</p>
    <GenericTable
      headerAxis="x"
      columnData={mockSummaryDefinition}
      rowData={mockSummaryRecordsList}
      mapToTableData={mockMappingMethodHorizontalWithHeaderCustomisation}
    />
  </>
)

export const MockDataVisualisationHorizontalWithClientSidePagination: Story = () => (
  <>
    <b style={{ ...fontStyle }}>Horizontal table with client side pagination</b>
    <p style={{ ...fontStyle, ...paragraphStyle }}>
      example shows horizontal table with client side pagination, user defined per page options and page size.
    </p>
    <GenericTable
      headerAxis="x"
      columnData={mockSummaryDefinition}
      rowData={mockSummaryRecordsListForPagination}
      mapToTableData={mockMappingMethodHorizontalWithCellCustomisation}
      tableOptions={{ enablePagination: true, pageSize: 5, perPageOptions: [5, 10, 15, 20] }}
    />
  </>
)

export const MockDataVisualisationVerticalWithPagination: Story = () => (
  <>
    <b style={{ ...fontStyle }}>Vertical table with client side pagination</b>
    <p style={{ ...fontStyle, ...paragraphStyle }}>
      example shows vertical table with client side pagination, user defined per page options and page size. vertical
      client side pagination is not supported by default in order to achieve the same results we use serverside
      pagination
    </p>
    <GenericTable
      headerAxis="y"
      columnData={mockSummaryDefinition}
      rowData={mockSummaryRecordsListForPagination}
      mapToTableData={mockMappingMethodVerticalWithCellCustomisation}
      tableOptions={{
        enablePagination: true,
        serverSidePagination: true,
        pageSize: 1,
        perPageOptions: [1, 10, 20, 50, 100],
      }}
      fetchData={(options) =>
        new Promise((res) => {
          res({
            columnData: mockSummaryDefinition,
            rowData: mockSummaryRecordsListForPagination.slice(
              options.pageIndex * options.pageSize,
              (options.pageIndex + 1) * options.pageSize
            ),
            totalCount: mockSummaryRecordsListForPagination.length,
          })
        })
      }
    />
  </>
)

export default { title: 'UI/Organisms/GenericTable' }
