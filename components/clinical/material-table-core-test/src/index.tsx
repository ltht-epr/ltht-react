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
  id: number
  parentId?: number
  answer1: string
  answer2: string
  answer3: string
  question: string
}

const columns: Array<Column<IPerson>> = [
  { title: '1/1/22', field: 'question' },
  { title: '2/1/22', field: 'answer1' },
  { title: '3/1/22', field: 'answer2' },
  { title: '3/1/22', field: 'answer3' },
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

const data: Array<IPerson> = [
  { id: 1, question: 'Score', answer1: '0P NEWS', answer2: '5 NEWS', answer3: '4 NEWS' },
  { id: 2, question: 'Intervention', answer1: '', answer2: 'ICON HERE', answer3: '' },
  { id: 3, question: 'Partial Indication', answer1: 'Bcp only required', answer2: '', answer3: '' },
  { id: 3.1, parentId: 3, question: 'Standard Observations', answer1: '', answer2: '', answer3: '' },
  { id: 3.2, parentId: 3, question: 'RR (breaths/min)', answer1: '', answer2: '', answer3: '' },
  { id: 3.3, parentId: 3, question: 'O2 Sat (%)', answer1: '', answer2: '', answer3: '' },
  { id: 3.4, parentId: 3, question: 'Supp O2', answer1: '', answer2: '', answer3: '' },
  { id: 3.5, parentId: 3, question: 'Blood Pressure', answer1: '', answer2: '', answer3: '' },
  { id: 3.6, parentId: 3, question: 'Standing 1 Minute BP', answer1: '', answer2: '', answer3: '' },
  { id: 3.7, parentId: 3, question: 'Standing 3 Minute BP', answer1: '', answer2: '', answer3: '' },
  { id: 3.8, parentId: 3, question: 'HR (BPM)', answer1: '', answer2: '', answer3: '' },
  { id: 3.9, parentId: 3, question: 'Temp (°C)', answer1: '', answer2: '', answer3: '' },
  { id: 3.1, parentId: 3, question: 'Consciousness', answer1: '', answer2: '', answer3: '' },
  { id: 3.11, parentId: 3, question: 'Pain Score', answer1: '', answer2: '', answer3: '' },
  { id: 3.12, parentId: 3, question: 'Blood Glucose (mmol/L)', answer1: '', answer2: '', answer3: '' },
  { id: 1, question: 'Reviewed By', answer1: '', answer2: '', answer3: '' },
  { id: 1, question: 'Taken By', answer1: '', answer2: '', answer3: '' },
  //{ question: '', answer1: '', answer2: '', answer3: '' },
]

// interface ReversedIPerson {
//   item: string
//   date1: string
//   date2: string
//   date3: string
//   date4: string
//   date5: string
//   date6: string
//   field2: string
// }

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

// const reversedColumns: Array<Column<ReversedIPerson>> = [
//   { title: 'Item', field: 'item', },
//   { title: '1/1/22', field: 'date1' },
//   { title: '2/1/22', field: 'date2' },
//   { title: '3/1/22', field: 'date3' },
//   { title: '4/1/22', field: 'date4' },
//   { title: '5/1/22', field: 'date5' },
//   { title: '6/1/22', field: 'date6' },
//   {
//     title: 'CustomTextColour',
//     sorting: false,
//     render: customTextColour,
//   },
//   {
//     title: 'CustomComponent',
//     sorting: false,
//     render: actionButtons,
//   },
// ]

// const reversedData: Array<ReversedIPerson> = [
//   {
//     item: 'Item1',
//     date1: 'Test',
//     date2: 'Test',
//     date3: 'Test',
//     date4: 'Test',
//     date5: 'Test',
//     date6: 'Test',
//     field2: 'YAIDUAWDAWD',
//   },
// ]

const MaterialTableCoreTest: FC = () => (
  <>
    <MaterialTable
      columns={columns}
      data={data}
      parentChildData={(row, rows) => rows.find((a) => a.id === row.parentId)}
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

    {/* <MaterialTable
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
    /> */}
  </>
)

export default MaterialTableCoreTest
