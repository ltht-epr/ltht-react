import { Story } from '@storybook/react'
import Table from '@ltht-react/table'
import summaryDefinition from './table.fixtures.summaryDefinition'
import summaryRecordsList from './table.fixtures.summaryRecords'

export const table: Story = () => <Table records={summaryRecordsList} defintion={summaryDefinition} />

export default { title: 'Ui/Organisms/table' }
