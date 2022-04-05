import { FC } from 'react'
import MaterialTable, { Column, MTableToolbar } from '@material-table/core'
import { Button } from '@material-ui/core'

const actionButtons = () => {
  return (
    <>
      <Button onClick={alert}>Test</Button>
    </>
  )
}

const customTextColour = () => {
  return (
    <>
      <div style={{ backgroundColor: getColour('warning') }}>TestColour</div>
    </>
  )
}

interface IPerson {
  item: string
  date: string
}

const columns: Array<Column<IPerson>> = [
  { title: 'Date', field: 'date' },
  { title: 'Item', field: 'item' },
  {
    title: 'CustomTextColour',
    sorting: false,
    render: customTextColour,
  },
  {
    title: 'CustomComponent',
    sorting: false,
    render: actionButtons,
  },
]

// const data: Array<IPerson> = [
//   { date: '1/1/22', item: 'Item1' },
//   { date: '2/1/22', item: 'Item2' },
//   { date: '3/1/22', item: 'Item3' },
// ]

interface ReversedIPerson {
  item: string
  date1: string
  date2: string
  date3: string
  date4: string
  date5: string
  date6: string
  date7: string
  date8: string
  date9: string
  date10: string
  date11: string
  date12: string
  date13: string
  date14: string
  date15: string
  date16: string
}

const getColour = (data: string) => {
  switch (data) {
    case 'danger': {
      return 'red'
    }
    case 'warning': {
      return 'yellow'
    }
    default: {
      return 'white'
    }
  }
}

const reversedColumns: Array<Column<ReversedIPerson>> = [
  { title: 'Item', field: 'item' },
  { title: '1/1/22', field: 'date1' },
  { title: '2/1/22', field: 'date2' },
  { title: '3/1/22', field: 'date3' },
  { title: '4/1/22', field: 'date4' },
  { title: '5/1/22', field: 'date5' },
  { title: '6/1/22', field: 'date6' },
  { title: '7/1/22', field: 'date7' },
  { title: '8/1/22', field: 'date8' },
  { title: '9/1/22', field: 'date9' },
  { title: '10/1/22', field: 'date2' },
  { title: '11/1/22', field: 'date3' },
  { title: '12/1/22', field: 'date4' },
  { title: '13/1/22', field: 'date5' },
  { title: '14/1/22', field: 'date6' },
  { title: '15/1/22', field: 'date7' },
  { title: '16/1/22', field: 'date8' },
  {
    title: 'CustomTextColour',
    sorting: false,
    render: customTextColour,
  },
  {
    title: 'CustomComponent',
    sorting: false,
    render: actionButtons,
  },
]

const reversedData: Array<ReversedIPerson> = [
  {
    item: 'Item1',
    date1: 'Test',
    date2: 'Test',
    date3: 'Test',
    date4: 'Test',
    date5: 'Test',
    date6: 'Test',
    date7: 'Test',
    date8: 'Test',
    date9: 'Test',
    date10: 'Test',
    date11: 'Test',
    date12: 'Test',
    date13: 'Test',
    date14: 'Test',
    date15: 'Test',
    date16: 'Test',
  },
]

const Table: FC<Props> = ({ data }) => (
  <>
    <MaterialTable
      columns={columns}
      data={data}
      components={{
        Toolbar: (props) => {
          return (
            <div style={{ backgroundColor: 'red' }}>
              <MTableToolbar {...props} />
            </div>
          )
        },
      }}
    />

    <MaterialTable
      columns={reversedColumns}
      data={reversedData}
      components={{
        Toolbar: (props) => {
          return (
            <div style={{ backgroundColor: 'red' }}>
              <MTableToolbar {...props} />
            </div>
          )
        },
      }}
    />
  </>
)

export default Table

interface Props {
  data: any
}
