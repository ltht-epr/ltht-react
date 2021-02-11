import { FC } from 'react'
import { Period as PeriodType } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'

const PeriodDetail: FC<Props> = ({ period }) => {
  if (period?.start?.value || period?.end?.value) {
    return (
      <DescriptionList>
        <DescriptionList.Term>Period</DescriptionList.Term>
        <DescriptionList.Description>{periodSummaryText(period)}</DescriptionList.Description>
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  period?: PeriodType | null
}

export default PeriodDetail
