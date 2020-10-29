/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Styled from '@emotion/styled'

import { Encounter } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/summary'

import ServiceProvider from '../atoms/hospital-stay-service-provider'
import Description from '../atoms/hospital-stay-description'
import Redacted from '../molecules/hospital-stay-redacted'

const StyledSummary = Styled.div`
  display: flex;
  justify-content: center;
`
const StyledDescription = Styled.div`
  flex: 1;
`
const StyledDate = Styled.div`
  flex: 1;
  text-align: left;
`
const StyledService = Styled.div`
  flex: 1;
  text-align: right;
`

const HospitalStaySummary: React.FC<Props> = ({ hospitalStay }) => {
  if (hospitalStay.metadata.isRedacted) {
    return <Redacted hospitalStay={hospitalStay} />
  }

  return (
    <StyledSummary>
      <StyledDate>
        <PeriodSummary period={hospitalStay.period} />
      </StyledDate>
      <StyledDescription>
        <Description encounter={hospitalStay} />
      </StyledDescription>
      <StyledService>
        <ServiceProvider encounter={hospitalStay} />
      </StyledService>
    </StyledSummary>
  )
}

interface Props {
  hospitalStay: Encounter
}

export default HospitalStaySummary
