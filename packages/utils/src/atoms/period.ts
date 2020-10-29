import { Period } from '@ltht-react/types'
import { partialDateTimeText } from './partial-date-time'

const periodSummaryText = (period?: Period | null): string => {
  const start = (period?.start && partialDateTimeText(period?.start)) || ''
  const end = (period?.end && partialDateTimeText(period?.end)) || ''

  if (start === '' && end === '') return ''

  if (end === '') return `${start} to Present`

  if (start === '') return `Unknown to ${end}`

  return `${start} to ${end}`
}

export default periodSummaryText
