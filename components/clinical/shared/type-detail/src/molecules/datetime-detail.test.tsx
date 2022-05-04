import { PartialDateTimeKindCode } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'

import DatetimeDetail from './datetime-detail'

describe('DatetimeDetail', () => {
  it('shows title and value when available', async () => {
    render(
      <DatetimeDetail
        term="Asserted Date"
        datetime={{ value: '2022-05-04T00:00:00+00:00', kind: PartialDateTimeKindCode.Date }}
      />
    )

    await screen.findByText('Asserted Date')
    await screen.findByText('04-May-2022')
  })

  it('shows nothing when there is no value', async () => {
    render(<DatetimeDetail term="Asserted Date" />)

    expect(screen.queryAllByText('Asserted Date').length).toBe(0)
  })
})
