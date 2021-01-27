import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { Encounter } from '@ltht-react/types'
import { RedactedDescription, PeriodSummary } from '@ltht-react/summary'

const StyledRedacted = styled.div`
  display: flex;
`
const StyledDate = styled.div`
  flex: 1;
  text-align: left;
`
const StyledDescription = styled.div`
  flex: 1;
  text-align: right;
`

const HospitalStayRedacted: React.FC<Props> = ({ hospitalStay, ...rest }) => (
  <StyledRedacted {...rest}>
    <StyledDate>
      <PeriodSummary period={hospitalStay.period} />
    </StyledDate>
    <StyledDescription>
      <RedactedDescription />
    </StyledDescription>
  </StyledRedacted>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  hospitalStay: Encounter
}

export default HospitalStayRedacted
