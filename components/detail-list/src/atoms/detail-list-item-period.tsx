import React from 'react'
import { Period as PeriodType } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'
import { DetailListItemTag, DetailListItemDescription } from '.'

const DetailListItemPeriod: React.FC<Props> = ({ period }) => {
  if (period?.start?.value || period?.end?.value) {
    return (
      <>
        <DetailListItemTag>Period</DetailListItemTag>
        <DetailListItemDescription>{periodSummaryText(period)}</DetailListItemDescription>
      </>
    )
  }
  return <></>
}

interface Props {
  period?: PeriodType | null
}

export default DetailListItemPeriod
