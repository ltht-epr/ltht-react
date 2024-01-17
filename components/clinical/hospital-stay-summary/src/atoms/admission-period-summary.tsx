import { PeriodSummary } from '@ltht-react/type-summary'
import { Maybe, PartialDateTime, PartialDateTimeKindCode, Period } from '@ltht-react/types'
import { HTMLAttributes } from 'react'

const AdmissionPeriodSummary = ({ period, ...rest }: Props) => {
  if (!period) return null

  const modifiedPeriod = {
    ...period,
    start: changePartialDateTimeKindCode(period.start, PartialDateTimeKindCode.Date),
    end: changePartialDateTimeKindCode(period.end, PartialDateTimeKindCode.Date),
  }

  return <PeriodSummary period={modifiedPeriod} {...rest} />
}

const changePartialDateTimeKindCode = (date?: Maybe<PartialDateTime>, kind?: PartialDateTimeKindCode) =>
  date ? { ...date, kind: kind ?? PartialDateTimeKindCode.DateTime } : date

interface Props extends HTMLAttributes<HTMLDivElement> {
  period?: Period | null
}
export default AdmissionPeriodSummary
