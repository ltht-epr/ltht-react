import { AsserterDetail } from '@ltht-react/type-detail'
import { ConditionAsserter } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'
import { asserter } from './detail.fixtures'

describe('Asserter Detail', () => {
  it('should show asserter details', async () => {
    render(<AsserterDetail asserter={asserter} />)
    screen.debug(undefined, Infinity)

    await screen.findByText('Diagnosis Stated By')
    screen.getByText('Relationship')
    screen.getByText('Practitioner Address/Organisation')
    screen.getByText('John smith (Dr)')
    screen.getByText('Practitioner')
    screen.getByText('Asserter Address Line 1, Line 2, Post Code')
  })

  it('should only show terms when no asserter', async () => {
    render(<AsserterDetail showIfEmpty />)
    screen.debug(undefined, Infinity)

    await screen.findByText('Diagnosis Stated By')
    screen.getByText('Relationship')
    screen.getByText('Practitioner Address/Organisation')

    expect(screen.queryByText('John smith (Dr)')).toBeNull()
    expect(screen.queryByText('Practitioner')).toBeNull()
    expect(screen.queryByText('Asserter Address Line 1, Line 2, Post Code')).toBeNull()
  })

  it('should show nothing when showIfEmpty is false', () => {
    render(<AsserterDetail showIfEmpty={false} />)
    screen.debug(undefined, Infinity)

    expect(screen.queryByText('Diagnosis Stated By')).toBeNull()
    expect(screen.queryByText('Relationship')).toBeNull()
    expect(screen.queryByText('Practitioner Address/Organisation')).toBeNull()

    expect(screen.queryByText('John smith (Dr)')).toBeNull()
    expect(screen.queryByText('Practitioner')).toBeNull()
    expect(screen.queryByText('Asserter Address Line 1, Line 2, Post Code')).toBeNull()
  })

  it('should show diagnosis stated by but no relationship with partial data', async () => {
    const modifiedAsserter: ConditionAsserter = { ...asserter, asserterType: undefined, asserterAddress: undefined }
    screen.debug(undefined, Infinity)
    render(<AsserterDetail asserter={modifiedAsserter} />)

    await screen.findByText('Diagnosis Stated By')
    expect(screen.queryByText('Relationship')).toBeNull()
    expect(screen.queryByText('Practitioner Address/Organisation')).toBeNull()

    screen.getByText('John smith (Dr)')
    expect(screen.queryByText('Practitioner')).toBeNull()
    expect(screen.queryByText('Asserter Address Line 1, Line 2, Post Code')).toBeNull()
  })
})
