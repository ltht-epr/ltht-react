import { ColumnDef, ColumnHelper, createColumnHelper, HeaderContext } from '@tanstack/react-table'
import { Header, TableData, UnknownDataType } from './table-rewrite'
import TableCell, { CellProps } from './table-cell'
import { IconProps } from '@ltht-react/icon'

const createColumns = (tableData: TableData): ColumnDef<UnknownDataType>[] => {
  const columnHelper = createColumnHelper<UnknownDataType>()

  const columns = createColumnsRecursively(tableData.headers, columnHelper)

  return columns
}

const createColumnsRecursively = (
  headers: Header[],
  columnHelper: ColumnHelper<UnknownDataType>
): ColumnDef<UnknownDataType>[] => {
  const result: ColumnDef<UnknownDataType>[] = headers.map((header) => {
    if (header.type === 'display') {
      return columnHelper.display({
        id: header.id,
        header: () => <TableCell {...header.cellProps} />,
        cell: (props) => {
          return <TableCell {...(props.getValue() as CellProps)} />
        },
      })
    }

    if (header.type === 'accessor') {
      return columnHelper.accessor(header.id, {
        header: (props) => {
          const cellProps: CellProps = { ...header.cellProps, iconProps: deriveHeaderIconProps(props) }
          return <TableCell {...cellProps} />
        },
        cell: (props) => {
          return <TableCell {...(props.getValue() as CellProps)} />
        },
      }) as ColumnDef<UnknownDataType, unknown>
    }

    return columnHelper.group({
      header: header.cellProps.text ?? '',
      columns: createColumnsRecursively(header.subheaders ?? [], columnHelper),
    })
  })

  return result
}

const deriveHeaderIconProps = (
  props: HeaderContext<UnknownDataType, string | CellProps | UnknownDataType[]>
): IconProps | undefined => {
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

export default createColumns
