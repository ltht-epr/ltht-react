import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'

const StyledCommunityTreatmentOrderConsent = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const CommunityTreatmentOrderConsent: FC<Props> = ({ communityTreatmentOrder, ...rest }) => (
  <StyledCommunityTreatmentOrderConsent {...rest}>
    {communityTreatmentOrder.legalStatus && communityTreatmentOrder.legalStatus.text}
  </StyledCommunityTreatmentOrderConsent>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderConsent
