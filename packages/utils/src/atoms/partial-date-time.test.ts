import { PartialDateTime, PartialDateTimeKindCode } from '@ltht-react/types'
import { formatDateTime, partialDateTimeText, formatPartialDateTimeAsDateOnly } from './partial-date-time'

describe('partialDateTimeText', () => {
  it('formats date correctly', () => {
    const date = partialDateTime(PartialDateTimeKindCode.Date)
    expect(partialDateTimeText(date)).toEqual('03-Feb-2013')
  })
  it('formats date-time correctly', () => {
    const date = partialDateTime(PartialDateTimeKindCode.DateTime)
    expect(partialDateTimeText(date)).toEqual('03-Feb-2013 13:15')
  })
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

  it('formats DateTimes to show date portion only in DD-MMM-YYYY format', () => {
    const date = partialDateTime(PartialDateTimeKindCode.DateTime)
    expect(formatPartialDateTimeAsDateOnly(date)).toEqual('03-Feb-2013')
  })
})

describe('formatPartialDateTimeAsDateOnly', () => {
  it('formats a standard date-time correctly', () => {
    const date: PartialDateTime = {
      value: '2013-02-03T13:15:16+00:00',
      kind: PartialDateTimeKindCode.DateTime,
    }
    expect(formatPartialDateTimeAsDateOnly(date)).toEqual('03-Feb-2013')
  })

  it('formats a pre-1970 date correctly', () => {
    const date: PartialDateTime = {
      value: '1950-07-15T10:30:00+00:00',
      kind: PartialDateTimeKindCode.DateTime,
    }
    expect(formatPartialDateTimeAsDateOnly(date)).toEqual('15-Jul-1950')
  })

  it('formats a far future date correctly', () => {
    const date: PartialDateTime = {
      value: '2099-12-31T23:59:59+00:00',
      kind: PartialDateTimeKindCode.DateTime,
    }
    expect(formatPartialDateTimeAsDateOnly(date)).toEqual('31-Dec-2099')
  })

  it('formats the edge case 1753-01-01T00:00:15+00:00 correctly', () => {
    const date: PartialDateTime = {
      value: '1753-01-01T00:00:15+00:00',
      kind: PartialDateTimeKindCode.DateTime,
    }
    expect(formatPartialDateTimeAsDateOnly(date)).toEqual('01-Jan-1753')
  })

  it.each([
    { date: '1899-01-01T00:00:00Z', expected: '01-Jan-1899' },
    { date: '1753-01-01T00:00:00Z', expected: '01-Jan-1753' },
    { date: '2024-01-01T00:00:00Z', expected: '01-Jan-2024' },
    { date: '2024-01-01T00:00:00+00:00', expected: '01-Jan-2024' },
    { date: '2024-04-01T00:00:00+00:00', expected: '01-Apr-2024' },
    { date: '1753-01-01T00:00:15+00:00', expected: '01-Jan-1753' },
    { date: '1900-01-01T00:00:00+00:00', expected: '01-Jan-1900' },
    { date: '1899-01-01T00:00:00+00:00', expected: '01-Jan-1899' },
    { date: '1800-01-01T00:00:00+00:00', expected: '01-Jan-1800' },
    { date: '0001-01-01T00:00:00+00:00', expected: '01-Jan-0001' },
    { date: '0001-01-01T00:00:00+00:00', expected: '01-Jan-0001' },
    { date: '1000-06-15T12:30:00+00:00', expected: '15-Jun-1000' },
    { date: '1500-12-31T23:59:59+00:00', expected: '31-Dec-1500' },
    { date: '1753-01-01T00:00:00+00:00', expected: '01-Jan-1753' },
    { date: '1753-01-01T00:00:15+00:00', expected: '01-Jan-1753' },
    { date: '1969-12-31T23:59:59+01:00', expected: '31-Dec-1969' },
    { date: '1970-01-01T00:00:00+00:00', expected: '01-Jan-1970' },
    { date: '1999-12-31T12:00:00+00:00', expected: '31-Dec-1999' },
    { date: '2000-01-01T00:00:00+00:00', expected: '01-Jan-2000' },
    { date: '2023-08-20T14:30:00+00:00', expected: '20-Aug-2023' },
    { date: '2025-12-31T23:59:59+00:00', expected: '31-Dec-2025' },
  ])('formats a range of dates correctly: %s', (props) => {
    const date: PartialDateTime = {
      value: props.date,
      kind: PartialDateTimeKindCode.DateTime,
    }
    expect(formatPartialDateTimeAsDateOnly(date)).toEqual(props.expected)
  })

  it('returns empty string for undefined', () => {
    expect(formatPartialDateTimeAsDateOnly(undefined)).toEqual('')
  })

  it('returns empty string for null', () => {
    expect(formatPartialDateTimeAsDateOnly(null)).toEqual('')
  })

  it('returns empty string for missing value', () => {
    const date: PartialDateTime = {
      value: '',
      kind: PartialDateTimeKindCode.DateTime,
    }
    expect(formatPartialDateTimeAsDateOnly(date)).toEqual('')
  })
})

const dateValue = '2013-02-03T13:15:16+00:00'
const partialDateTime = (kind: PartialDateTimeKindCode): PartialDateTime => ({ value: dateValue, kind })
