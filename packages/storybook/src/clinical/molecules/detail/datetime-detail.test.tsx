import { render, screen } from '@testing-library/react'

import { DatetimeDetail } from '@ltht-react/type-detail'

import { partialDateTime } from './detail.fixtures'

describe('DatetimeDetail', () => {
  it('shows title and value when available', async () => {
    render(<DatetimeDetail term="Diagnosis Date" datetime={partialDateTime} />)

    await screen.findByText('Diagnosis Date')
    await screen.findByText('01-Jan-2013')
  })

  it('shows nothing when there is no value', async () => {
    render(<DatetimeDetail term="Diagnosis Date" />)

    expect(screen.queryByText('Diagnosis Date')).toBeNull()
  })

  it('shows just the term if instructed to', async () => {
    render(<DatetimeDetail term="Diagnosis Date" showIfEmpty />)

    await screen.findByText('Diagnosis Date')
    expect(screen.queryByText('01-Jan-2013')).toBeNull()
  })
})
