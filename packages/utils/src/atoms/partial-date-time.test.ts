import { PartialDateTime, PartialDateTimeKindCode } from '@ltht-react/types'
import { formatDateTime, partialDateTimeText } from './partial-date-time'

describe('partialDateTimeText', () => {
  // it('formats date correctly', () => {
  //   const date = partialDateTime(PartialDateTimeKindCode.Date)
  //   expect(partialDateTimeText(date)).toEqual('03-Feb-2013')
  // })
  // it('formats date-time correctly', () => {
  //   const date = partialDateTime(PartialDateTimeKindCode.DateTime)
  //   expect(partialDateTimeText(date)).toEqual('03-Feb-2013 13:15')
  // })
  it('formats time correctly', () => {
    const date = partialDateTime(PartialDateTimeKindCode.Time)
    expect(partialDateTimeText(date)).toEqual('13:15')
  })
  it('formats year correctly', () => {
    const date = partialDateTime(PartialDateTimeKindCode.Year)
    expect(partialDateTimeText(date)).toEqual('2013')
  })
  it('formats year-month correctly', () => {
    const date = partialDateTime(PartialDateTimeKindCode.YearMonth)
    expect(partialDateTimeText(date)).toEqual('Feb-2013')
  })

  it('formats dateTimes correctly', () => {
    const date = new Date(2022, 0, 10, 9, 47)
    expect(formatDateTime(date)).toEqual('10 January 2022 : 09:47')
  })

  it('formats dateTimes without seconds or milliseconds', () => {
    const date = new Date(2022, 0, 10, 9, 47, 10, 10)
    expect(formatDateTime(date)).toEqual('10 January 2022 : 09:47')
  })

  it('formats DateTimes as midnight by default if no time is provided', () => {
    const date = new Date(2022, 0, 10)
    expect(formatDateTime(date)).toEqual('10 January 2022 : 00:00')
  })
})

const dateValue = '2013-02-03T13:15:16+00:00'
const partialDateTime = (kind: PartialDateTimeKindCode): PartialDateTime => ({ value: dateValue, kind })
