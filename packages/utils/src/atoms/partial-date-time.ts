import { PartialDateTime, PartialDateTimeKindCode } from '@ltht-react/types'
import { format, parseISO } from 'date-fns'

const locale = 'en-gb'
const dayFormat = '2-digit'
const monthFormat = 'short'
const monthFormatLong = 'long'
const yearFormat = 'numeric'
const hourFormat = '2-digit'
const minuteFormat = '2-digit'

export const formatDate = (date: Date): string =>
  date.toLocaleString(locale, { day: dayFormat, month: monthFormat, year: yearFormat }).split(' ').join('-')

export const formatDateExplicitMonth = (date: Date): string =>
  date.toLocaleString(locale, { day: dayFormat, month: monthFormatLong, year: yearFormat }).split(' ').join(' ')

export const formatTime = (date: Date): string =>
  date.toLocaleString(locale, { hour: hourFormat, minute: minuteFormat, hour12: false }).split(' ').join(':')

export const formatDateTime = (date: Date): string => `${formatDateExplicitMonth(date)} : ${formatTime(date)}`

export const partialDateTimeText = (partialDateTime?: PartialDateTime | null): string => {
  if (!partialDateTime || !partialDateTime.value) {
    return ''
  }
  switch (partialDateTime.kind) {
    case PartialDateTimeKindCode.Date:
      return formatDate(new Date(partialDateTime.value))
    case PartialDateTimeKindCode.DateTime: {
      const date = new Date(partialDateTime.value)
      return `${formatDate(date)} ${formatTime(date)}`
    }
    case PartialDateTimeKindCode.Year:
      return new Date(partialDateTime.value).toLocaleString(locale, { year: yearFormat })
    case PartialDateTimeKindCode.YearMonth:
      return new Date(partialDateTime.value)
        .toLocaleString(locale, { month: monthFormat, year: yearFormat })
        .split(' ')
        .join('-')
    case PartialDateTimeKindCode.Time:
      return formatTime(new Date(partialDateTime.value))
    default:
      return ''
  }
}

export const formatPartialDateTimeAsDateOnly = (partialDateTime?: PartialDateTime | null): string => {
  if (!partialDateTime?.value) return ''

  const date = parseISO(partialDateTime.value)
  return format(date, 'dd-MMM-yyyy')
}
