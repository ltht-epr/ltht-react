import { Coding } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'
import CodingListDetail from './coding-list-detail'

describe('CodingListDetail', () => {
  const codings: Coding[] = [
    {
      code: '1234',
      display: 'First coding',
    },
    {
      code: '2345',
      display: 'Second coding',
    },
  ]
  it('should show title and codings if present', async () => {
    render(<CodingListDetail term="Coding list" codings={codings} />)

    await screen.findByText('Coding list')
    await screen.findByText('First coding')
    await screen.findByText('Second coding')
  })

  it('should show nothing if no codings are present', () => {
    render(<CodingListDetail term="Coding list" />)

    expect(screen.queryByText('Coding list')).toBeNull()
  })

  it('should show nothing if the codings list is empty', () => {
    render(<CodingListDetail term="Coding list" codings={[]} />)

    expect(screen.queryByText('Coding list')).toBeNull()
  })
})
