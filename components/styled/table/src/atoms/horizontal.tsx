import { FC } from 'react'
import { Column, TableCellProps, useTable } from 'react-table'
import { answerText, partialDateTimeText } from '@ltht-react/utils'
import { TRANSLUCENT_BRIGHT_BLUE_TABLE, TRANSLUCENT_GREY_TABLE } from '@ltht-react/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Maybe, QuestionnaireItem, QuestionnaireResponse, KeyValue, QuestionnaireResponseItem } from '@ltht-react/types'
import styled from '@emotion/styled'

const Container = styled.div`
  background-color: white;
`

const StyledTableCell: FC<RowProps> = styled(TableCell)`
  text-align: center !important;
  background-color: ${(props: RowProps) =>
    props.rowIndex % 2 === 1 ? TRANSLUCENT_GREY_TABLE : TRANSLUCENT_BRIGHT_BLUE_TABLE};
}
`

const StyledTableHeader = styled.th`
  border: 1px solid rgba(200, 200, 200, 1);
`

const processColumnItems = (items: Maybe<QuestionnaireItem>[]): Column<KeyValue>[] =>
  items.map((item) => {
    if (item?.item?.length && item?.item?.length > 0) {
      return {
        Header: item?.text ?? '',
        columns: processColumnItems(item?.item),
      }
    }
    return {
      Header: item?.text ?? '',
      accessor: item?.linkId ?? '',
    }
  })

const processResponse = (records: Maybe<QuestionnaireResponse>[]): KeyValue[] => {
  const result: KeyValue[] = []
  records.forEach((record) => {
    if (record?.item) {
      const obj: KeyValue = {
        date: partialDateTimeText(record.authored),
      }
      for (let index = 0; index < record.item.length; index++) {
        const prop = record.item[index]?.linkId
        const value = record.item[index]?.answer
        if (prop && value) {
          if (value[0]?.item) {
            const items = processResponseItems(value[0]?.item)
            items.forEach((x) => {
              obj[x.key] = x.value
            })
          }
          obj[prop] = answerText(value[0]) ?? ''
        }
      }
      result.push(obj)
    }
  })

  return result
}

const processResponseItems = (items: Maybe<QuestionnaireResponseItem>[]): Tuple[] => {
  const result: Tuple[] = []
  items.forEach((item) => {
    const obj: Tuple = {
      key: '',
      value: '',
    }
    if (item) {
      const prop = item.linkId
      const value = item.answer
      if (prop && value) {
        if (value[0]?.item) {
          const items = processResponseItems(value[0]?.item)
          items.forEach((x) => result.push(x))
        }
        obj.key = prop
        obj.value = answerText(value[0]) ?? ''
      }
    }

    result.push(obj)
  })

  return result
}

const HorizontalTable: FC<IProps> = ({ definitionItems, records }) => {
  const columns: Column<KeyValue>[] = [
    {
      Header: 'Record Date',
      accessor: 'date',
    },
    ...processColumnItems(definitionItems),
  ]

  const data: KeyValue[] = processResponse(records)

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
    <Container>
      <CssBaseline />
      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTableHeader {...column.getHeaderProps()}>{column.render('Header')}</StyledTableHeader>
              ))}
            </tr>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, rowIdx) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <StyledTableCell rowIndex={rowIdx} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </StyledTableCell>
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

interface RowProps extends TableCellProps {
  rowIndex: number
}

interface Tuple {
  key: string
  value: string
}

export default HorizontalTable
