import { AsserterDetail } from '@ltht-react/type-detail'
import { ConditionAsserter } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'
import { asserter } from './detail.fixtures'

describe('Asserter Detail', () => {
  it('should show asserter details', async () => {
    render(<AsserterDetail asserter={asserter} />)

    await screen.findByText('Asserted By')
    screen.getByText('Asserter Relationship')
    screen.getByText('John smith (Dr)')
    screen.getByText('Practitioner')
  })

  it('should only show terms when no asserter', async () => {
    render(<AsserterDetail showIfEmpty />)

    await screen.findByText('Asserted By')
    screen.getByText('Asserter Relationship')

    expect(screen.queryByText('John smith (Dr)')).toBeNull()
    expect(screen.queryByText('Practitioner')).toBeNull()
  })

  it('should show nothing when showIfEmpty is false', () => {
    render(<AsserterDetail showIfEmpty={false} />)

    expect(screen.queryByText('Asserted By')).toBeNull()
    expect(screen.queryByText('Asserter Relationship')).toBeNull()

    expect(screen.queryByText('John smith (Dr)')).toBeNull()
    expect(screen.queryByText('Practitioner')).toBeNull()
  })

  it('should show asserted by but no relationship with partial data', async () => {
    const modifiedAsserter: ConditionAsserter = { ...asserter, asserterType: undefined }

    render(<AsserterDetail asserter={modifiedAsserter} />)

    await screen.findByText('Asserted By')
    expect(screen.queryByText('Asserter Relationship')).toBeNull()

    screen.getByText('John smith (Dr)')
    expect(screen.queryByText('Practitioner')).toBeNull()
  })
})
