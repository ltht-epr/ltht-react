import React from 'react'
import styled from '@emotion/styled'

import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { RedactedDescription, PeriodSummary } from '@ltht-react/summary'

const StyledRedactedDescription = styled.div`
  flex-grow: 1;
  text-align: left;
`

const StyledPeriodSummary = styled.div`
  text-align: right;
`

const CommunityTreatmentOrderRedacted: React.FC<Props> = ({ communityTreatmentOrder }) => (
  <>
    <StyledRedactedDescription>
      <RedactedDescription />
    </StyledRedactedDescription>
    <StyledPeriodSummary>
      <PeriodSummary period={communityTreatmentOrder.period} />
    </StyledPeriodSummary>
  </>
)

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderRedacted
