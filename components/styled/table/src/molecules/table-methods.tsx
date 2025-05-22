import { ColumnDef, ColumnHelper, createColumnHelper, HeaderContext, Table } from '@tanstack/react-table'
import { IconProps } from '@ltht-react/icon'
import { Axis } from '@ltht-react/types'
import React from 'react'
import { Header, TableData, DataEntity } from './table'
import TableCell, { CellProps } from './table-cell'
import { ScrollState } from './useScrollRef'

const createColumns = (tableData: TableData, headerAxis: Axis): ColumnDef<DataEntity>[] => {
  const columnHelper = createColumnHelper<DataEntity>()

  let columns = createColumnsRecursively(tableData.headers, columnHelper, headerAxis)

  if (tableData.rows.some((row) => row.subRows)) {
    columns = prependColumnWithExpansionControls(columns, columnHelper, headerAxis)
  }

  return columns
}

const createColumnsRecursively = (
  headers: Header[],
  columnHelper: ColumnHelper<DataEntity>,
  headerAxis: Axis
): ColumnDef<DataEntity>[] => {
  const result: ColumnDef<DataEntity>[] = headers.map((header) => {
    if (header.type === 'display') {
      return columnHelper.display({
        id: header.id,
        header: () => {
          const headerCellProps: CellProps = { ...header.cellProps, headerAxis }
          return <TableCell {...headerCellProps} />
        },
        cell: (props) => {
          const cellProps: CellProps = { ...(props.getValue() as CellProps), headerAxis }
          return <TableCell {...cellProps} />
        },
      })
    }

    if (header.type === 'accessor') {
      return columnHelper.accessor(header.id, {
        header: (props) => {
          const cellProps: CellProps = { ...header.cellProps, iconProps: deriveHeaderIconProps(props), headerAxis }
          return <TableCell {...cellProps} />
        },
        cell: (props) => {
          const cellProps: CellProps = { ...(props.getValue() as CellProps), headerAxis }
          return <TableCell {...cellProps} />
        },
      }) as ColumnDef<DataEntity, unknown>
    }

    return columnHelper.group({
      header: header.cellProps.text ?? '',
      columns: createColumnsRecursively(header.subHeaders ?? [], columnHelper, headerAxis),
    })
  })

  return result
}

const deriveHeaderIconProps = (props: HeaderContext<DataEntity, CellProps | DataEntity[]>): IconProps | undefined => {
  if (props.column.getIsSorted() === 'asc') {
    return {
      type: 'chevron',
      direction: 'up',
      size: 'medium',
    }
  }
  if (props.column.getIsSorted() === 'desc') {
    return {
      type: 'chevron',
      direction: 'down',
      size: 'medium',
    }
  }
  return undefined
}

const prependColumnWithExpansionControls = (
  columns: ColumnDef<DataEntity, unknown>[],
  columnHelper: ColumnHelper<DataEntity>,
  headerAxis: Axis
) => {
  const expanderColumn = columnHelper.display({
    id: 'expander',
    header: ({ table }) => {
      const headerCellProps: CellProps = {
        iconProps: {
          type: 'chevron',
          direction: table.getIsAllRowsExpanded() ? 'down' : 'right',
          size: 'medium',
        },
        headerAxis,
        clickHandler: table.getToggleAllRowsExpandedHandler(),
      }
      return <TableCell {...headerCellProps} />
    },
    cell: (props) => {
      const cellProps: CellProps = props.row.getCanExpand()
        ? {
            iconProps: {
              type: 'chevron',
              direction: props.row.getIsExpanded() ? 'down' : 'right',
              size: 'medium',
            },
            headerAxis,
            clickHandler: props.row.getToggleExpandedHandler(),
          }
        : { headerAxis }
      return <TableCell {...cellProps} />
    },
  })

  return [expanderColumn].concat(columns)
}

const calculateStaticColumnOffset = (
  cellIdx: number,
  staticColumns: number,
  firstColumnWidth: number,
  secondColumnWidth: number
) => {
  if (staticColumns === 0) {
    return undefined
  }

  switch (cellIdx) {
    case 0:
      return 0
    case 1:
      return cellIdx < staticColumns ? firstColumnWidth : undefined
    case 2:
      return cellIdx < staticColumns ? firstColumnWidth + secondColumnWidth : undefined
    default:
      return undefined
  }
}

const handleScrollEvent = (
  pagination: { getCanNextPage: () => boolean; nextPage: VoidFunction },
  headerAxis: Axis,
  scrollState: ScrollState
) => {
  const { scrollWidth, scrollHeight, currentXScroll, currentYScroll } = scrollState
  if (
    headerAxis === 'x' &&
    currentYScroll >= scrollHeight - getPercentageOfMax(5, scrollHeight) &&
    currentYScroll <= scrollHeight &&
    pagination.getCanNextPage()
  ) {
    pagination.nextPage()
  }

  if (
    headerAxis === 'y' &&
    currentXScroll >= scrollWidth - getPercentageOfMax(5, scrollWidth) &&
    currentXScroll <= scrollWidth &&
    pagination.getCanNextPage()
  ) {
    pagination.nextPage()
  }
}

const getPercentageOfMax = (percentage: number, max: number) => max * (percentage / 100)

const handleDataUpdate = (
  tableData: TableData,
  pageIndex: number,
  pageSize: number,
  headerAxis: Axis,
  setColumns: (value: React.SetStateAction<ColumnDef<DataEntity>[]>) => void,
  setData: (value: React.SetStateAction<DataEntity[]>) => void,
  setPageCount: (value: React.SetStateAction<number>) => void
) => {
  if (tableData && tableData.headers.length > 0) {
    if (headerAxis === 'x') {
      setColumns(createColumns(tableData, headerAxis))
      setData(tableData.rows.slice(0, (pageIndex + 1) * pageSize))
      setPageCount(Math.ceil(tableData.rows.length / pageSize))
    } else {
      const head = tableData.headers[0]
      const tail = tableData.headers.slice(1, tableData.headers.length)
      setColumns(
        createColumns(
          { headers: [head, ...tail.slice(0, (pageIndex + 1) * pageSize)], rows: tableData.rows },
          headerAxis
        )
      )
      setData(tableData.rows)
      setPageCount(Math.ceil(tail.length / pageSize))
    }
  }
}

const calculateSliceStartPoint = (oldLength: number, usingExpanderColumn: boolean) => {
  if (oldLength > 0) {
    return usingExpanderColumn ? 2 : 1
  }

  return 0
}

const handleDataUpdateForManualPagination = (
  tableData: TableData,
  headerAxis: Axis,
  keepPreviousData: boolean,
  setColumns: (value: React.SetStateAction<ColumnDef<DataEntity>[]>) => void,
  setData: (value: React.SetStateAction<DataEntity[]>) => void
) => {
  if (headerAxis === 'x') {
    setData((old) => {
      const newData = keepPreviousData ? [...old, ...tableData.rows] : tableData.rows
      setColumns(createColumns({ headers: tableData.headers, rows: newData }, headerAxis))
      return newData
    })
  } else if (tableData.headers.length > 0) {
    setColumns((old) => {
      const newColumns = createColumns(tableData, headerAxis)
      const sliceStartPoint = calculateSliceStartPoint(
        old.length,
        tableData.rows.some((x) => x.subRows)
      )

      return keepPreviousData ? [...old, ...newColumns.slice(sliceStartPoint, newColumns.length)] : newColumns
    })
    setData(tableData.rows)
  }
}

export {
  createColumns,
  calculateStaticColumnOffset,
  handleScrollEvent,
  handleDataUpdate,
  handleDataUpdateForManualPagination,
}
