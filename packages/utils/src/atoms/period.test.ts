import { PartialDateTimeKindCode, PartialDateTime, Period } from '@ltht-react/types'
import periodSummaryText from './period'

const startDataTime = '2013-02-03T13:15:16+00:00'
const endDataTime = '2014-04-04T13:15:16+00:00'

const startPartialDateTime = (kind: PartialDateTimeKindCode): PartialDateTime => {
  return {
    value: startDataTime,
    kind,
  }
}

const endPartialDateTime = (kind: PartialDateTimeKindCode): PartialDateTime => {
  return {
    value: endDataTime,
    kind,
  }
}

describe('periodSummaryText', () => {
  it('formats period summary correctly when both start and end are not specified', () => {
    const period: Period = {}
    expect(periodSummaryText(period)).toEqual('')
  })

  it('formats period summary correctly when only period start is specified', () => {
    const period: Period = {
      start: startPartialDateTime(PartialDateTimeKindCode.Date),
    }
    expect(periodSummaryText(period)).toEqual('03-Feb-2013 to Present')
  })

  it('formats period summary correctly when only period end is specified', () => {
    const period: Period = {
      end: endPartialDateTime(PartialDateTimeKindCode.Date),
    }
    expect(periodSummaryText(period)).toEqual('Unknown to 04-Apr-2014')
  })

  it('formats period summary correctly when both period start and end are specified', () => {
    const period: Period = {
      start: startPartialDateTime(PartialDateTimeKindCode.Date),
      end: endPartialDateTime(PartialDateTimeKindCode.Date),
    }
    expect(periodSummaryText(period)).toEqual('03-Feb-2013 to 04-Apr-2014')
  })
})
