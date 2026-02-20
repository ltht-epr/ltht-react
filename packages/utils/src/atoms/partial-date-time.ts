import { PartialDateTime, PartialDateTimeKindCode } from '@ltht-react/types'
import { format, parseISO, isMatch, parse } from 'date-fns'

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

/**
 * Converts a PartialDateTime object into a human-readable string based on its kind.
 *
 * Handles different kinds of partial date/time information:
 * - `Date`        → returns date only (formatted using `formatDate`)
 * - `DateTime`    → returns date and time (formatted using `formatDate` + `formatTime`)
 * - `Year`        → returns the year (formatted using `toLocaleString` with year options)
 * - `YearMonth`   → returns year-month (formatted with locale, joined with '-')
 * - `Time`        → returns time only (formatted using `formatTime`)
 *
 * If `partialDateTime` is `null`, `undefined`, or the value is missing, returns an empty string.
 *
 * @param partialDateTime - A PartialDateTime object containing a value and a kind
 * @returns A human-readable string representing the date/time according to its kind,
 *          or an empty string if the input is missing or unrecognized.
 *
 * @example
 * partialDateTimeText({ value: '2023-08-20', kind: PartialDateTimeKindCode.Date })
 * // returns "20-Aug-2023" (depending on formatDate implementation)
 *
 * partialDateTimeText({ value: '2023-08-20T14:30:00', kind: PartialDateTimeKindCode.DateTime })
 * // returns "20-Aug-2023 14:30" (depending on formatDate/formatTime)
 *
 * partialDateTimeText({ value: '2023', kind: PartialDateTimeKindCode.Year })
 * // returns "2023"
 *
 * partialDateTimeText({ value: '2023-08', kind: PartialDateTimeKindCode.YearMonth })
 * // returns "Aug-2023"
 *
 * partialDateTimeText({ value: '14:30:00', kind: PartialDateTimeKindCode.Time })
 * // returns "14:30"
 */
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

/**
 * Formats a PartialDateTime object into a display string ("dd-MMM-yyyy").
 *
 * For dates after 1970, the full ISO string is parsed normally.
 * For dates in 1970 or earlier, the `formatLegacyIsoDate` function is used
 * to avoid local timezone shifts that could cause off-by-one-day errors.
 *
 * @param partialDateTime - A PartialDateTime object containing an ISO 8601 string value
 * @returns A formatted date string in "dd-MMM-yyyy" format, or an empty string
 *          if the input is null, undefined, or missing a value.
 *
 * @example
 * formatPartialDateTimeAsDateOnly({ value: '1753-01-01T00:00:15+00:00' })
 * // returns "01-Jan-1753"
 *
 * formatPartialDateTimeAsDateOnly({ value: '2023-08-20T14:30:00+01:00' })
 * // returns "20-Aug-2023"
 */
export const formatPartialDateTimeAsDateOnly = (partialDateTime?: PartialDateTime | null): string => {
  if (!partialDateTime?.value) return ''

  const isoString = partialDateTime.value

  const year = Number(isoString.substring(0, 4))

  if (year > 1969) {
    const date = parseISO(isoString)
    return format(date, 'dd-MMM-yyyy')
  }

  return formatLegacyIsoDate(isoString)
}

/**
 * Formats a pre-1970 ISO date string to a human-readable "dd-MMM-yyyy" format.
 *
 * This function handles historical dates safely by:
 * - Using only the first 10 characters (`YYYY-MM-DD`) of the ISO string
 *   to ignore time and timezone components.
 * - Ensuring the date is parsed correctly without local timezone adjustments,
 *   preventing off-by-one-day errors.
 *
 * @param isoString - An ISO 8601 date string (e.g., "1753-01-01T00:00:15+00:00")
 * @returns A formatted date string in "dd-MMM-yyyy" format, or an empty string
 *          if the input is invalid or incomplete.
 *
 * @example
 * formatLegacyIsoDate('1753-01-01T00:00:15+00:00')
 * // returns "01-Jan-1753"
 */
export const formatLegacyIsoDate = (isoString: string): string => {
  const datePart = isoString.slice(0, 10)

  if (datePart.length !== 10) return ''

  // ensure we have a valid date part
  if (!isMatch(datePart, 'yyyy-MM-dd')) return ''

  const date = parseISO(datePart)
  // parse the date part and format it as "dd-MMM-yyyy"
  return format(date, 'dd-MMM-yyyy')
}

export const parseAndFormatDateStringForDisplay = (dateString?: string): string | undefined => {
  if (!dateString) return undefined

  try {
    let date = parse(dateString, 'dd/MM/yyyy HH:mm:ss', new Date())

    if (isNaN(date.getTime())) {
      date = new Date(dateString)
    }

    return isNaN(date.getTime()) ? dateString : formatDateTime(date)
  } catch {
    return dateString
  }
}
