import { Period } from '@ltht-react/types'
import { partialDateTimeText } from './partial-date-time'

const periodSummaryText = (period?: Period | null): string => partialDateTimeText(period?.start)

export { periodSummaryText }
