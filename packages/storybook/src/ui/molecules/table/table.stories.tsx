import Table, { TableData } from '@ltht-react/table'
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

export const TableWithSortingDisabled: Story = () => <Table tableData={mockTableData} enableSorting={false} />

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

export const TableWithInfiniteScrollPagination: Story = () => (
  <div style={{ height: '400px' }}>
    <Table
      tableData={mockTableDataForPagination}
      staticColumns={1}
      pageSize={10}
      currentPage={1}
      headerAxis="x"
      infiniteScrollEnabled
    />
  </div>
)

export const VerticalTableWithPagination: Story = () => (
  <div style={{ height: '400px' }}>
    <Table tableData={mockTableDataForVerticalPagination} staticColumns={1} headerAxis="y" />
  </div>
)

export const VerticalTableWithInfiniteScrollPagination: Story = () => (
  <div style={{ height: '400px' }}>
    <Table tableData={mockTableDataForVerticalPagination} staticColumns={1} headerAxis="y" infiniteScrollEnabled />
  </div>
)

export const TableWithManualPagination: Story = () => {
  const getPaginatedData = (pageIndex: number, pageSize: number): TableData => ({
    headers: mockTableDataForPagination.headers,
    rows: mockTableDataForPagination.rows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
  })

  const [pageIndex, setPageIndex] = useState<number>(0)
  const pageSize = 10
  const [data, setData] = useState<TableData>({ headers: [], rows: [] })
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const pageCount = Math.ceil(mockTableDataForPagination.rows.length / pageSize)

  useEffect(() => {
    // simulate latency
    setTimeout(() => {
      setIsFetching(false)
      setData(getPaginatedData(pageIndex, pageSize))
    }, 500)
  }, [pageIndex, pageSize])

  const nextPage = () => {
    setIsFetching(true)
    setPageIndex((old: number) => old + 1)
  }

  const getCanNextPage = () => pageIndex + 1 < pageCount

  return (
    <div style={{ height: '400px' }}>
      <Table
        tableData={data}
        staticColumns={1}
        nextPage={nextPage}
        getCanNextPage={getCanNextPage}
        headerAxis="x"
        isFetching={isFetching}
        keepPreviousData
        manualPagination
      />
    </div>
  )
}

export const TableWithManualPaginationAndInfiniteScroll: Story = () => {
  const getPaginatedData = (pageIndex: number, pageSize: number): TableData => ({
    headers: mockTableDataForPagination.headers,
    rows: mockTableDataForPagination.rows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
  })

  const [pageIndex, setPageIndex] = useState<number>(0)
  const pageSize = 10
  const [data, setData] = useState<TableData>({ headers: [], rows: [] })
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const pageCount = Math.ceil(mockTableDataForPagination.rows.length / pageSize)

  useEffect(() => {
    // simulate latency
    setTimeout(() => {
      setIsFetching(false)
      setData(getPaginatedData(pageIndex, pageSize))
    }, 500)
  }, [pageIndex, pageSize])

  const nextPage = () => {
    setIsFetching(true)
    setPageIndex((old: number) => old + 1)
  }

  const getCanNextPage = () => pageIndex + 1 < pageCount

  return (
    <div style={{ height: '400px' }}>
      <Table
        tableData={data}
        staticColumns={1}
        nextPage={nextPage}
        getCanNextPage={getCanNextPage}
        headerAxis="x"
        isFetching={isFetching}
        keepPreviousData
        manualPagination
        infiniteScrollEnabled
      />
    </div>
  )
}

export const TableWithVerticalManualPagination: Story = () => {
  const getPaginatedData = (pageIndex: number, pageSize: number): TableData => ({
    headers: [
      mockTableDataForVerticalPagination.headers[0],
      ...mockTableDataForVerticalPagination.headers
        .slice(1, mockTableDataForVerticalPagination.headers.length)
        .slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
    ],
    rows: mockTableDataForVerticalPagination.rows,
  })

  const [pageIndex, setPageIndex] = useState<number>(0)
  const pageSize = 5
  const [data, setData] = useState<TableData>({ headers: [], rows: [] })
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const pageCount = Math.ceil((mockTableDataForVerticalPagination.headers.length - 1) / pageSize)

  useEffect(() => {
    // simulate latency
    setTimeout(() => {
      setIsFetching(false)
      setData(getPaginatedData(pageIndex, pageSize))
    }, 500)
  }, [pageIndex, pageSize])

  const nextPage = () => {
    setIsFetching(true)
    setPageIndex((old: number) => old + 1)
  }

  const getCanNextPage = () => pageIndex + 1 < pageCount

  return (
    <div style={{ height: '400px' }}>
      <Table
        tableData={data}
        staticColumns={1}
        nextPage={nextPage}
        getCanNextPage={getCanNextPage}
        headerAxis="y"
        manualPagination
        isFetching={isFetching}
        keepPreviousData
      />
    </div>
  )
}

export const TableWithVerticalManualPaginationAndInfiniteScroll: Story = () => {
  const getPaginatedData = (pageIndex: number, pageSize: number): TableData => ({
    headers: [
      mockTableDataForVerticalPagination.headers[0],
      ...mockTableDataForVerticalPagination.headers
        .slice(1, mockTableDataForVerticalPagination.headers.length)
        .slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
    ],
    rows: mockTableDataForVerticalPagination.rows,
  })

  const [pageIndex, setPageIndex] = useState<number>(0)
  const pageSize = 5
  const [data, setData] = useState<TableData>({ headers: [], rows: [] })
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const pageCount = Math.ceil((mockTableDataForVerticalPagination.headers.length - 1) / pageSize)

  useEffect(() => {
    // simulate latency
    setTimeout(() => {
      setIsFetching(false)
      setData(getPaginatedData(pageIndex, pageSize))
    }, 500)
  }, [pageIndex, pageSize])

  const nextPage = () => {
    setIsFetching(true)
    setPageIndex((old: number) => old + 1)
  }

  const getCanNextPage = () => pageIndex + 1 < pageCount

  return (
    <div style={{ height: '400px' }}>
      <Table
        tableData={data}
        staticColumns={1}
        nextPage={nextPage}
        getCanNextPage={getCanNextPage}
        headerAxis="y"
        manualPagination
        isFetching={isFetching}
        keepPreviousData
        infiniteScrollEnabled
      />
    </div>
  )
}

export default { title: 'UI/Molecules/Table' }
