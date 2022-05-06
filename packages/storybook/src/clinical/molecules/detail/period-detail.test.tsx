import { render, screen } from '@testing-library/react'
import { PeriodDetail } from '@ltht-react/type-detail'

import { period } from './detail.fixtures'

describe('PeriodDetail', () => {
  it('should show details if present', async () => {
    render(<PeriodDetail period={period} />)

    await screen.findByText('Period')
    await screen.findByText('01-Apr-2020 to Present')
  })

  it('should not show anything if details are not present', () => {
    render(<PeriodDetail />)

    expect(screen.queryByText('Period')).toBeNull()
  })

  it('should show the term but no value if told to', async () => {
    render(<PeriodDetail showIfEmpty />)

    await screen.findByText('Period')
  })
})
