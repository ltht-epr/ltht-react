import { PartialDateTime, PartialDateTimeKindCode } from '@ltht-react/types'
import { partialDateTimeText } from './partial-date-time'

describe('partialDateTimeText', () => {
  const dateValue = '2013-02-03T13:15:16+00:00'

  it('formats date correctly', () => {
    const date: PartialDateTime = {
      value: dateValue,
      kind: PartialDateTimeKindCode.Date,
    }
    expect(partialDateTimeText(date)).toEqual('03-Feb-2013')
  })
  it('formats date-time correctly', () => {
    const date: PartialDateTime = {
      value: dateValue,
      kind: PartialDateTimeKindCode.DateTime,
    }
    expect(partialDateTimeText(date)).toEqual('03-Feb-2013 13:15')
  })
  it('formats time correctly', () => {
    const date: PartialDateTime = {
      value: dateValue,
      kind: PartialDateTimeKindCode.Time,
    }
    expect(partialDateTimeText(date)).toEqual('13:15')
  })
  it('formats year correctly', () => {
    const date: PartialDateTime = {
      value: dateValue,
      kind: PartialDateTimeKindCode.Year,
    }
    expect(partialDateTimeText(date)).toEqual('2013')
  })
  it('formats year-month correctly', () => {
    const date: PartialDateTime = {
      value: dateValue,
      kind: PartialDateTimeKindCode.YearMonth,
    }
    expect(partialDateTimeText(date)).toEqual('Feb-2013')
  })
})
