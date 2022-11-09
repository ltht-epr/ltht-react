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

export const MockDataVisualisationVerticalWithCellCustomisation: Story = () => (
  <GenericTable
    headerAxis="y"
    columnData={mockSummaryDefinition}
    rowData={mockSummaryRecordsList}
    mapToTableData={mockMappingMethodVerticalWithCellCustomisation}
  />
)

export const MockDataVisualisationHorizontalWithCellCustomisation: Story = () => (
  <GenericTable
    headerAxis="x"
    columnData={mockSummaryDefinition}
    rowData={mockSummaryRecordsList}
    mapToTableData={mockMappingMethodHorizontalWithCellCustomisation}
  />
)

export const MockDataVisualisationHorizontalWithHeaderCustomisation: Story = () => (
  <GenericTable
    headerAxis="x"
    columnData={mockSummaryDefinition}
    rowData={mockSummaryRecordsList}
    mapToTableData={mockMappingMethodHorizontalWithHeaderCustomisation}
  />
)

export const MockDataVisualisationHorizontalWithClientSidePagination: Story = () => (
  <GenericTable
    headerAxis="x"
    columnData={mockSummaryDefinition}
    rowData={mockSummaryRecordsListForPagination}
    mapToTableData={mockMappingMethodHorizontalWithCellCustomisation}
    tableOptions={{ enablePagination: true, pageSize: 5, perPageOptions: [5, 10, 15, 20] }}
  />
)

export const MockDataVisualisationVerticalWithPagination: Story = () => (
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
)

export default { title: 'UI/Organisms/GenericTable' }
