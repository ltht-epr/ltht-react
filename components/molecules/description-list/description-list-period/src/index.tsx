import React from 'react'
import { Period as PeriodType } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'
import DescriptionListTerm from '@ltht-react/description-list-term'
import DescriptionListDescription from '@ltht-react/description-list-description'

const DescriptionListPeriod: React.FC<Props> = ({ period }) => {
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

export default DescriptionListPeriod
