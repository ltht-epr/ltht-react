import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/summary'

import Consent from '../atoms/community-treatment-order-summary-consent'
import Restrictions from '../atoms/community-treatment-order-summary-restrictions'
import Status from '../atoms/community-treatment-order-summary-status'
import Redacted from '../molecules/community-treatment-order-redacted'

const StyledSummary = styled.div`
  display: flex;
  justify-content: center;
`
const StyledDescription = styled.div`
  flex-grow: 1;
`
const StyledDate = styled.div`
  text-align: right;
`

const CommunityTreatmentOrderSummary: FC<Props> = ({ communityTreatmentOrder, ...rest }) => {
  if (communityTreatmentOrder.metadata.isRedacted) {
    return (
      <StyledSummary {...rest}>
        <Redacted communityTreatmentOrder={communityTreatmentOrder} />
      </StyledSummary>
    )
  }

  return (
    <StyledSummary {...rest}>
      <StyledDescription>
        <Status communityTreatmentOrder={communityTreatmentOrder} />
        <Restrictions communityTreatmentOrder={communityTreatmentOrder} />
      </StyledDescription>
      <StyledDate>
        <PeriodSummary period={communityTreatmentOrder.period} />
        <Consent communityTreatmentOrder={communityTreatmentOrder} />
      </StyledDate>
    </StyledSummary>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderSummary
