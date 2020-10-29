/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Styled from '@emotion/styled'

import { Encounter } from '@ltht-react/types'
import { RedactedDescription, PeriodSummary } from '@ltht-react/summary'

const StyledRedacted = Styled.div`
  display: flex;
`
const StyledDate = Styled.div`
  flex: 1;
  text-align: left;
`
const StyledDescription = Styled.div`
  flex: 1;
  text-align: right;
`

const HospitalStayRedacted: React.FC<Props> = ({ hospitalStay }) => {
  return (
    <StyledRedacted>
      <StyledDate>
        <PeriodSummary period={hospitalStay.period} />
      </StyledDate>
      <StyledDescription>
        <RedactedDescription />
      </StyledDescription>
    </StyledRedacted>
  )
}

interface Props {
  hospitalStay: Encounter
}

export default HospitalStayRedacted
