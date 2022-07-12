import { FC } from 'react'
import { Column, useTable } from 'react-table'
import { partialDateTimeText } from '@ltht-react/utils'

import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Maybe, QuestionnaireItem, QuestionnaireResponse, KeyValue } from '@ltht-react/types'
import styled from '@emotion/styled'

const Container = styled.div`
  background-color: white;
`

const StyledTableCell = styled(TableCell)`
  text-align: center !important;
`

const HorizontalTable: FC<IProps> = ({ definitionItems, records }) => {
  const columns: Column<KeyValue>[] = [
    {
      Header: 'Record Date',
      accessor: 'date',
    },
    ...definitionItems.map(item => ({
      Header: item?.text ?? '',
      accessor: item?.linkId ?? '',
    })),
  ]

  const data: KeyValue[] = records.map(record => {
    const obj: KeyValue = {}
    if (record.item) {
      obj.date = partialDateTimeText(record.authored)

      for (let index = 0; index < record.item.length; index++) {
        const prop = record.item[index]?.linkId
        const value = record.item[index]?.answer
        if (prop && value) {
          if (record.item[index]?.answer) {
            // todo util for processing cell value
            obj[prop] = value[0]?.valueString ?? ''
          }
        }
      }
    }
    return obj
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
    <Container>
      <CssBaseline />
      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <StyledTableCell {...cell.getCellProps()}>{cell.render('Cell')}</StyledTableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </MaUTable>
    </Container>
  )
}

interface IProps {
  definitionItems: Array<Maybe<QuestionnaireItem>>
  records: QuestionnaireResponse[]
}

export default HorizontalTable
