import { ColumnDef, ColumnHelper, createColumnHelper, HeaderContext } from '@tanstack/react-table'
import { IconProps } from '@ltht-react/icon'
import TableCell, { CellProps } from './table-cell'
import { DataEntity, Header, TableData } from './table-core'

const createColumns = (tableData: TableData, showExpanderColumn: boolean): ColumnDef<DataEntity>[] => {
  const columnHelper = createColumnHelper<DataEntity>()

  let columns = createColumnsRecursively(tableData.headers, columnHelper)

  if (showExpanderColumn) {
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

export default createColumns
