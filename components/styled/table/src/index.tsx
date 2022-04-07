import { FC } from 'react'
import MaterialTable, { MTableToolbar } from '@material-table/core'

const Table: FC<Props> = ({ records, definition }) => (
  <>
    <MaterialTable
      columns={definition}
      data={records}
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
  records: any
  definition: any
}
