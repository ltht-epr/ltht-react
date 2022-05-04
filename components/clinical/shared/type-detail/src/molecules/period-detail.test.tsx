import { PartialDateTimeKindCode, Period } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'
import PeriodDetail from './period-detail'

describe('PeriodDetail', () => {
  const period: Period = {
    start: { value: '2022-05-04T08:00:00+00:00', kind: PartialDateTimeKindCode.Date },
    end: { value: '2022-05-14T16:00:00+00:00', kind: PartialDateTimeKindCode.Date },
  }
  it('should show details if present', async () => {
    render(<PeriodDetail period={period} />)

    await screen.findByText('Period')
    await screen.findByText('04-May-2022 to 14-May-2022')
  })

  it('should not show anything if details are not present', () => {
    render(<PeriodDetail />)

    expect(screen.queryByText('Period')).toBeNull()
  })
})
