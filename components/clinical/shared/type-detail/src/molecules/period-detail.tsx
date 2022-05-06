import { FC } from 'react'
import { Maybe, Period as PeriodType, Scalars } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'

const PeriodDetail: FC<Props> = ({ period, showIfEmpty = false }) => {
  const summaryText = periodSummaryText(period)
  if (summaryText !== '' || showIfEmpty === true) {
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
  period?: PeriodType | null
  showIfEmpty?: Maybe<Scalars['Boolean']>
}

export default PeriodDetail
