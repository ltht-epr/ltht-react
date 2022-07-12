import { render } from '@testing-library/react'
import Table from '@ltht-react/table'
import { summaryDefinition, summaryRecordsList } from './table.fixtures'

describe('Table', () => {
  it('Renders', () => {
    render(<Table definition={summaryDefinition} records={summaryRecordsList} />)
  })
})
