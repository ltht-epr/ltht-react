import { FC } from 'react'
import MUIDataTable from 'mui-datatables'

const MuiDatatablesTest: FC = () => <div>MuiDatatablesTest</div>

const columns = ['Name', 'Company', 'City', 'State']

const data = [
  ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
  ['John Walsh', 'Test Corp', 'Hartford', 'CT'],
  ['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
  ['James Houston', 'Test Corp', 'Dallas', 'TX'],
]

const options = {
  filterType: 'checkbox',
}

;<MUIDataTable title={'Employee List'} data={data} columns={columns} options={options} />

export default MuiDatatablesTest
