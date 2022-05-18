import { IdentifierDetail } from '@ltht-react/type-detail'
import { Identifier } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'
import { identifier } from './detail.fixtures'

describe('IdentifierDetail', () => {
  it('should show a term without identifier details', async () => {
    render(<IdentifierDetail term="Identifier detail" showIfEmpty />)
    await screen.findByText('Identifier detail')
    screen.getByText('Use')
    screen.getByText('Type')
    screen.getByText('Assigner')
    screen.getByText('Period')
  })

  it('should show nothing when no identifier and told to', async () => {
    render(<IdentifierDetail term="Identifier detail" showIfEmpty={false} />)
    expect(screen.queryByText('Identifier detail')).toBeNull()
    expect(screen.queryByText('Use')).toBeNull()
    expect(screen.queryByText('Type')).toBeNull()
    expect(screen.queryByText('Assigner')).toBeNull()
    expect(screen.queryByText('Period')).toBeNull()
  })

  it('should show a term and all details', async () => {
    render(<IdentifierDetail term="Identifier detail" identifier={identifier} showIfEmpty />)
    await screen.findByText('Identifier detail')
    screen.getByText('Use')
    screen.getByText('Type')
    screen.getByText('Assigner')
    screen.getByText('Period')
    screen.getByText('Official')
    screen.getByText('GP')
    screen.getByText('Smith, John (Dr)')
    screen.getByText('01-Apr-2020 to Present')
  })

  it('should show a term and partial details', async () => {
    const partialIdentifier: Identifier = { ...identifier, period: undefined }
    render(<IdentifierDetail term="Identifier detail" identifier={partialIdentifier} showIfEmpty={false} />)
    await screen.findByText('Identifier detail')
    screen.getByText('Use')
    screen.getByText('Type')
    screen.getByText('Assigner')
    screen.getByText('Official')
    screen.getByText('GP')
    screen.getByText('Smith, John (Dr)')

    expect(screen.queryByText('Period')).toBeNull()
    expect(screen.queryByText('01-Apr-2020 to Present')).toBeNull()
  })
})
