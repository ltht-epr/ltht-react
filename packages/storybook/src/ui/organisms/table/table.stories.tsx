import { Story } from '@storybook/react'
import Table from '@ltht-react/table'
import mockData from './table.fixtures'

export const table: Story = () => <Table data={mockData} />

export default { title: 'Ui/Organisms/table' }
