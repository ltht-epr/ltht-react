import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'

const StyledCommunityTreatmentOrderSummaryRestrictions = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const CommunityTreatmentOrderSummaryRestrictions: FC<Props> = ({ communityTreatmentOrder, ...rest }) => (
  <StyledCommunityTreatmentOrderSummaryRestrictions {...rest}>
    {communityTreatmentOrder.restrictions && communityTreatmentOrder.restrictions}
  </StyledCommunityTreatmentOrderSummaryRestrictions>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderSummaryRestrictions
