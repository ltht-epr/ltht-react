import { FC } from 'react'
import MaterialTable, { Column, MTableToolbar } from '@material-table/core'
import { Button } from '@material-ui/core'

// const actionButtons = () => {
//   return (
//     <>
//       <Button onClick={alert}>Test</Button>
//     </>
//   )
// }

const customTextColour = (rowData: any) => {
  return (
    <>
      <div style={{ backgroundColor: getColourTest(rowData) }}>{rowData}</div>
    </>
  )
}

interface IPerson {
  id: number
  parentId?: number
  answer1: string
  answer2: string
  answer3: string
  answer4?: string
  answer5?: string
  answer6?: string
  answer7?: string
  answer8?: string
  answer9?: string
  answer10?: string
  answer11?: string
  answer12?: string
  answer13?: string
  answer14?: string
  answer15?: string
  answer16?: string
  answer17?: string
  answer18?: string
  answer19?: string
  answer20?: string
  answer21?: string
  question: string
}

const columns: Array<Column<IPerson>> = [
  { title: '', field: 'question' },
  { title: '3/1/22', field: 'answer1' },
  { title: '', field: 'answer2' },
  {
    title: '2/1/22',
    field: 'answer3',
  },
  {
    title: '1/1/22',
    field: 'answer4',
    render: (rowData) => {
      return customTextColour(rowData.answer4)
    },
  },
  { title: '1/1/21', field: 'answer5' },
  { title: '1/1/22', field: 'answer6' },
  { title: '1/1/22', field: 'answer7' },
  { title: '1/1/22', field: 'answer8' },
  { title: '1/1/22', field: 'answer9' },
  { title: '1/1/22', field: 'answer10' },
  { title: '1/1/22', field: 'answer11' },
  { title: '1/1/22', field: 'answer12' },
  { title: '1/1/22', field: 'answer13' },
  { title: '1/1/22', field: 'answer14' },
  { title: '1/1/22', field: 'answer15' },
  { title: '1/1/22', field: 'answer16' },
  { title: '1/1/22', field: 'answer17' },
  { title: '1/1/22', field: 'answer18' },
  { title: '1/1/22', field: 'answer19' },
  { title: '1/1/22', field: 'answer20' },
  { title: '1/1/22', field: 'answer21' },
]

const data: Array<IPerson> = [
  { id: 0, question: '', answer1: '13:30', answer2: '14:45', answer3: '11:00' },
  {
    id: 1,
    question: 'Score',
    answer1: '0P NEWS',
    answer2: '5 NEWS',
    answer3: '4 NEWS',
    answer4: '26',
    answer5: '',
    answer6: '',
    answer7: '',
    answer8: '',
    answer9: '',
    answer10: '',
    answer11: '',
    answer12: '',
    answer13: '',
    answer14: '',
    answer15: '',
    answer16: '',
    answer17: '',
    answer18: '',
    answer19: '',
    answer20: '',
    answer21: '',
  },
  { id: 2, question: 'Intervention', answer1: '', answer2: '', answer3: '', answer4: '25' },
  { id: 3, question: 'Partial Indication', answer1: 'Bcp only required', answer2: '', answer3: '', answer4: '24' },
  { id: 3.1, parentId: 3, question: 'Standard Observations', answer1: '', answer2: '', answer3: '', answer4: '' },
  { id: 3.2, parentId: 3, question: 'RR (breaths/min)', answer1: '25', answer2: '12', answer3: '65' },
  {
    id: 3.3,
    parentId: 3,
    question: 'O2 Sat (%)',
    answer1: '',
    answer2: '92 (Target 94-98 %)',
    answer3: '94 (Target 94-98 %)',
  },
  { id: 3.4, parentId: 3, question: 'Supp O2', answer1: '', answer2: '', answer3: '' },
  { id: 3.5, parentId: 3, question: 'Blood Pressure', answer1: '148 / 90', answer2: '144 / 122', answer3: '122 / 88' },
  { id: 3.6, parentId: 3, question: 'Standing 1 Minute BP', answer1: '140 / 90', answer2: '', answer3: '' },
  { id: 3.7, parentId: 3, question: 'Standing 3 Minute BP', answer1: '', answer2: '', answer3: '' },
  { id: 3.8, parentId: 3, question: 'HR (BPM)', answer1: '', answer2: '88', answer3: '188' },
  { id: 3.9, parentId: 3, question: 'Temp (°C)', answer1: '', answer2: '37', answer3: '37' },
  { id: 3.1, parentId: 3, question: 'Consciousness', answer1: '', answer2: 'Alert', answer3: 'Alert' },
  { id: 3.11, parentId: 3, question: 'Pain Score', answer1: '', answer2: '', answer3: '' },
  { id: 3.12, parentId: 3, question: 'Blood Glucose (mmol/L)', answer1: '', answer2: '', answer3: '' },
  { id: 1, question: 'Reviewed By', answer1: '', answer2: '', answer3: '' },
  {
    id: 1,
    question: 'Taken By',
    answer1: 'WARRINER, Joshua (Mr), LTHT',
    answer2: 'BARNETT, Jack (Mr), LTHT',
    answer3: 'BARNETT, Jack (Mr), LTHT',
  },
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

const getColourTest = (data: number) => {
  switch (data > 25) {
    case true: {
      return 'green'
    }
    case false: {
      return 'red'
    }
    default: {
      return 'yellow'
    }
  }
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
      options={{
        rowStyle: (rowData, index, level) => ({
          backgroundColor: index % 2 === 0 ? '#EEE' : 'white',
        }),
        fixedColumns: {
          left: 0,
        },
      }}
      components={{
        Toolbar: (props) => {
          return (
            <div title="Observations" style={{ backgroundColor: 'purple' }}>
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
