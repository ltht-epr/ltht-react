import { PartialDateTimeKindCode, Period } from '@ltht-react/types'
import { periodSummaryText } from './period'

describe('periodSummaryText', () => {
  const startValue = '2013-02-03T13:15:16+00:00'
  const endValue = '2014-04-04T13:15:16+00:00'

  it('formats period summary correctly when both start and end are not specified', () => {
    const period: Period = {}
    expect(periodSummaryText(period)).toEqual('')
  })

  it('formats period summary correctly when only period start is specified', () => {
    const period: Period = {
      start: {
        value: startValue,
        kind: PartialDateTimeKindCode.Date,
      },
    }
    expect(periodSummaryText(period)).toEqual('03-Feb-2013')
  })

  it('formats period summary correctly when only period end is specified', () => {
    const period: Period = {
      end: {
        value: endValue,
        kind: PartialDateTimeKindCode.Date,
      },
    }
    expect(periodSummaryText(period)).toEqual('Unknown to 04-Apr-2014')
  })

  it('formats period summary correctly when both period start and end are specified', () => {
    const period: Period = {
      start: {
        value: startValue,
        kind: PartialDateTimeKindCode.Date,
      },
      end: {
        value: endValue,
        kind: PartialDateTimeKindCode.Date,
      },
    }
    expect(periodSummaryText(period)).toEqual('03-Feb-2013 to 04-Apr-2014')
  })
})
