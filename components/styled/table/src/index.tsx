import { FC } from 'react'
import GenericTable, { TableData } from './atoms/table'

const Table: FC<IProps> = ({ columnData, rowData, mapToTableData }) => {
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

interface IProps<TColumn = any, TRow = any> {
  columnData: TColumn
  rowData: TRow
  mapToTableData: (colItems: TColumn, rowItems: TRow) => TableData
}

export default Table
