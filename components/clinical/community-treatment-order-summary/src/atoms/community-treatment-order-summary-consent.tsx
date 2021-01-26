import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'

const StyledCommunityTreatmentOrderSummaryConsent = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: right;
  font-size: smaller;
  padding-top: 0.25rem;
`

const CommunityTreatmentOrderSummaryConsent: React.FC<Props> = ({ communityTreatmentOrder, ...rest }) => (
  <StyledCommunityTreatmentOrderSummaryConsent {...rest}>
    {communityTreatmentOrder.consentToTreat && communityTreatmentOrder.consentToTreat}
  </StyledCommunityTreatmentOrderSummaryConsent>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderSummaryConsent
