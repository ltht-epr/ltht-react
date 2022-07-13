import { FC } from 'react'
import { Column, useTable } from 'react-table'

import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Maybe, QuestionnaireItem, QuestionnaireResponse, KeyValue } from '@ltht-react/types'
import styled from '@emotion/styled'
import { answerText, partialDateTimeText } from '@ltht-react/utils'

const Container = styled.div`
  background-color: white;
`

const StyledTableCell = styled(TableCell)`
  text-align: center !important;
`

const VerticalTable: FC<IProps> = ({ definitionItems, records }) => {
  const columns: Column<KeyValue>[] = [
    {
      Header: '',
      accessor: 'property',
    },
    ...records.map(record => ({
      Header: partialDateTimeText(record.authored) ?? '',
      accessor: record?.id ?? '',
    })),
  ]

  let data: KeyValue[] = definitionItems.map(def => {
    const obj: KeyValue = {}
    obj.property = def?.text ?? ''
    obj.linkId = def?.linkId ?? ''
    return obj
  })

  data = data.map(_item => {
    const item = { ..._item }
    records.forEach(record => {
      const find = record.item?.find(x => x?.linkId === item.linkId)
      if (find && find.answer) {
        const answer = find.answer[0]
        item[record.id] = answerText(answer) ?? ''
      }
    })
    return item
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

export default VerticalTable
