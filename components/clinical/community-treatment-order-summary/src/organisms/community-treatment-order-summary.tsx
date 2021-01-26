import React from 'react'
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

const CommunityTreatmentOrderSummary: React.FC<Props> = ({ communityTreatmentOrder }) => {
  if (communityTreatmentOrder.metadata.isRedacted) {
    return (
      <StyledSummary>
        <Redacted communityTreatmentOrder={communityTreatmentOrder} />
      </StyledSummary>
    )
  }

  return (
    <StyledSummary>
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

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderSummary
