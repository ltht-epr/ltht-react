import React from 'react'
import { Period as PeriodType } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'
import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@ltht-react/description-list'

const PeriodDetail: React.FC<Props> = ({ period }) => {
  if (period?.start?.value || period?.end?.value) {
    return (
      <DescriptionList>
        <DescriptionListTerm>Period</DescriptionListTerm>
        <DescriptionListDescription>{periodSummaryText(period)}</DescriptionListDescription>
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  period?: PeriodType | null
}

export default PeriodDetail
