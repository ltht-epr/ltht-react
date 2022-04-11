import { FC } from 'react'
import MaterialTable, { Column } from '@material-table/core'

interface IPerson {
  firstName: string
  lastName: string
  birthYear: number
  availability: boolean
}

const lookup = { true: 'Available', false: 'Unavailable' }

const columns: Array<Column<IPerson>> = [
  { title: 'First Name', field: 'firstName' },
  { title: 'Last Name', field: 'lastName' },
  { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
  { title: 'Availablity', field: 'availability', lookup },
]

const data: Array<IPerson> = [
  { firstName: 'Tod', lastName: 'Miles', birthYear: 1987, availability: true },
  { firstName: 'Jess', lastName: 'Smith', birthYear: 2000, availability: false },
]

const Table: FC = () => (
  <>
    <MaterialTable columns={columns} data={data} />
  </>
)

export default Table

// interface Props {
//   // records: any
//   // definition: any
// }
