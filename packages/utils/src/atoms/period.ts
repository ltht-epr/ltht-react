import { Period } from '@ltht-react/types'
import { partialDateTimeText } from './partial-date-time'

const periodSummaryText = (period?: Period | null): string => {
  var start = (period?.start && partialDateTimeText(period?.start)) || ''
  var end = (period?.end && partialDateTimeText(period?.end)) || ''

  return end === '' ? start : start === '' ? `Unknown to ${end}` : `${start} to ${end}`
}

export { periodSummaryText }
