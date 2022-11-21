import { FC, useEffect, useRef, useState } from 'react'
import {
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel,
  getSortedRowModel,
  ExpandedState,
  SortingState,
  ColumnDef,
} from '@tanstack/react-table'
import { Icon } from '@ltht-react/icon'
import { Axis } from '@ltht-react/types'
import { createColumns, handleScrollEventManual } from './table-methods'
import useDimensionsRef from './useDimensionRef'
import { ScrollableContainer, StyledNextPageButtonContainer, StyledTable } from './table-styled-components'
import useScrollRef from './useScrollRef'
import { buildTableBody, buildTableHead, DataEntity, TableData } from './table-core'

const InfiniteScrollManualPaginatedTable: FC<IProps> = ({
  tableData,
  staticColumns,
  headerAxis,
  nextPage,
  getCanNextPage,
}) => {
  const firstColumn = useRef(null)
  const scrollableDivElement = useRef(null)

  const { width } = useDimensionsRef(firstColumn)
  const scrollState = useScrollRef(scrollableDivElement)

  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [sorting, setSorting] = useState<SortingState>([])

  const [data, setData] = useState<DataEntity[]>([])
  const [columns, setColumns] = useState<ColumnDef<DataEntity>[]>([])

  useEffect(() => {
    if (tableData) {
      if (headerAxis === 'x') {
        setColumns(createColumns(tableData))
        setData((old) => [...old, ...tableData.rows])
      } else if (tableData.headers.length > 0) {
        setColumns((old) => {
          const newColumns = createColumns(tableData)
          return [...old, ...newColumns.slice(old.length > 0 ? 1 : 0, newColumns.length)]
        })
        setData(tableData.rows)
      }
    }
  }, [tableData.rows, tableData.headers, tableData, headerAxis])

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
      sorting,
    },
    manualPagination: true,
    onExpandedChange: setExpanded,
    onSortingChange: setSorting,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  useEffect(() => {
    if (!scrollState) {
      return
    }

    handleScrollEventManual(getCanNextPage, nextPage, headerAxis, scrollState)
  }, [scrollState, getCanNextPage, nextPage, headerAxis])

  return (
    <>
      <ScrollableContainer ref={scrollableDivElement} tableHeaderAxis={headerAxis}>
        <StyledTable role="table">
          {buildTableHead(table, staticColumns, width, firstColumn)}
          {buildTableBody(table, staticColumns, width)}
        </StyledTable>
        <StyledNextPageButtonContainer
          role="button"
          elementPosition={headerAxis === 'x' ? 'bottom' : 'right'}
          onClick={() => nextPage()}
          hidden={!getCanNextPage()}
        >
          <Icon type="chevron" direction={headerAxis === 'x' ? 'down' : 'right'} size="medium" />
        </StyledNextPageButtonContainer>
      </ScrollableContainer>
    </>
  )
}

interface IProps {
  tableData: TableData
  staticColumns: 0 | 1 | 2
  headerAxis: Axis
  nextPage: () => void
  getCanNextPage: () => boolean
}

export default InfiniteScrollManualPaginatedTable
