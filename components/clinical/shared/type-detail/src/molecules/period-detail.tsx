import { FC } from 'react'
import { Maybe, Period as PeriodType } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'

const PeriodDetail: FC<Props> = ({ period }) => {
  const summaryText = periodSummaryText(period)
  if (summaryText !== '') {
    return (
      <DescriptionList>
        <DescriptionList.Term>Period</DescriptionList.Term>
        <DescriptionList.Description>{summaryText}</DescriptionList.Description>
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  period?: Maybe<PeriodType>
}

export default PeriodDetail
