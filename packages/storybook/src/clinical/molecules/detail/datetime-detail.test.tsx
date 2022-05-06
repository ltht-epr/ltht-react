import { render, screen } from '@testing-library/react'

import { DatetimeDetail } from '@ltht-react/type-detail'

import { partialDateTime } from './detail.fixtures'

describe('DatetimeDetail', () => {
  it('shows title and value when available', async () => {
    render(<DatetimeDetail term="Asserted Date" datetime={partialDateTime} />)

    await screen.findByText('Asserted Date')
    await screen.findByText('01-Jan-2013')
  })

  it('shows nothing when there is no value', async () => {
    render(<DatetimeDetail term="Asserted Date" />)

    expect(screen.queryByText('Asserted Date')).toBeNull()
  })

  it('shows just the term if instructed to', async () => {
    render(<DatetimeDetail term="Asserted Date" showIfEmpty />)

    await screen.findByText('Asserted Date')
    expect(screen.queryByText('01-Jan-2013')).toBeNull()
  })
})
