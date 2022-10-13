import GenericTable, { TableData } from './atoms/table'

export default function Table<TColumn, TRow>({ columnData, rowData, mapToTableData }: IProps<TColumn, TRow>) {
  if (
    !columnData ||
    !rowData ||
    (Array.isArray(columnData) && columnData?.length === 0) ||
    (Array.isArray(rowData) && rowData?.length === 0)
  ) {
    return <div>Could not render table. Definition items array was empty.</div>
  }

  if (typeof mapToTableData !== 'function') {
    return <div>Could not render table. mapping method not provided.</div>
  }

  return <GenericTable columnData={columnData} rowData={rowData} mapToTableData={mapToTableData} />
}

interface IProps<TColumn, TRow> {
  columnData: TColumn | undefined
  rowData: TRow | undefined
  mapToTableData: (colItems: TColumn, rowItems: TRow) => TableData
}
