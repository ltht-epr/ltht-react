import { ColumnDef, ColumnHelper, createColumnHelper, HeaderContext, Table } from '@tanstack/react-table'
import { IconProps } from '@ltht-react/icon'
import { Axis } from '@ltht-react/types'
import { Header, TableData, DataEntity } from './table-core'
import TableCell, { CellProps } from './table-cell'
import { ScrollState } from './useScrollRef'

const createColumns = (tableData: TableData): ColumnDef<DataEntity>[] => {
  const columnHelper = createColumnHelper<DataEntity>()

  let columns = createColumnsRecursively(tableData.headers, columnHelper)

  if (tableData.rows.some((row) => row.subRows)) {
    columns = prependColumnWithExpansionControls(columns, columnHelper)
  }

  return columns
}

const createColumnsRecursively = (
  headers: Header[],
  columnHelper: ColumnHelper<DataEntity>
): ColumnDef<DataEntity>[] => {
  const result: ColumnDef<DataEntity>[] = headers.map((header) => {
    if (header.type === 'display') {
      return columnHelper.display({
        id: header.id,
        header: () => <TableCell {...header.cellProps} />,
        cell: (props) => <TableCell {...(props.getValue() as CellProps)} />,
      })
    }

    if (header.type === 'accessor') {
      return columnHelper.accessor(header.id, {
        header: (props) => {
          const cellProps: CellProps = { ...header.cellProps, iconProps: deriveHeaderIconProps(props) }
          return <TableCell {...cellProps} />
        },
        cell: (props) => <TableCell {...(props.getValue() as CellProps)} />,
      }) as ColumnDef<DataEntity, unknown>
    }

    return columnHelper.group({
      header: header.cellProps.text ?? '',
      columns: createColumnsRecursively(header.subHeaders ?? [], columnHelper),
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
  columnHelper: ColumnHelper<DataEntity>
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
            clickHandler: props.row.getToggleExpandedHandler(),
          }
        : {}
      return <TableCell {...cellProps} />
    },
  })

  return [expanderColumn].concat(columns)
}

const calculateStaticColumnOffset = (cellIdx: number, staticColumns: number, firstColumnWidth: number) => {
  if (staticColumns === 0) {
    return undefined
  }

  if (cellIdx === 0) {
    return 0
  }

  if (cellIdx < staticColumns) {
    return firstColumnWidth
  }

  return undefined
}

const handleScrollEvent = (table: Table<DataEntity>, headerAxis: Axis, scrollState: ScrollState) => {
  const { scrollWidth, scrollHeight, currentXScroll, currentYScroll } = scrollState
  if (
    headerAxis === 'x' &&
    currentYScroll > scrollHeight - 20 &&
    currentYScroll < scrollHeight + 20 &&
    table.getCanNextPage()
  ) {
    table.nextPage()
  }

  if (
    headerAxis === 'y' &&
    currentXScroll > scrollWidth - 20 &&
    currentXScroll < scrollWidth + 20 &&
    table.getCanNextPage()
  ) {
    table.nextPage()
  }
}

const handleScrollEventManual = (
  getCanNextPage: () => boolean,
  nextPage: () => void,
  headerAxis: Axis,
  scrollState: ScrollState
) => {
  const { scrollWidth, scrollHeight, currentXScroll, currentYScroll } = scrollState
  if (
    headerAxis === 'x' &&
    currentYScroll > scrollHeight - 20 &&
    currentYScroll < scrollHeight + 20 &&
    getCanNextPage()
  ) {
    nextPage()
  }

  if (
    headerAxis === 'y' &&
    currentXScroll > scrollWidth - 20 &&
    currentXScroll < scrollWidth + 20 &&
    getCanNextPage()
  ) {
    nextPage()
  }
}

export { createColumns, calculateStaticColumnOffset, handleScrollEvent, handleScrollEventManual }
