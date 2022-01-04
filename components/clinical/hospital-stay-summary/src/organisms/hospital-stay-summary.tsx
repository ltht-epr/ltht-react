import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { Encounter } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/type-summary'

import ServiceProvider from '../atoms/hospital-stay-service-provider'
import Description from '../atoms/hospital-stay-description'
import Redacted from '../molecules/hospital-stay-redacted'

const StyledSummary = styled.div`
  display: flex;
  justify-content: center;
`
const StyledDescription = styled.div`
  flex: 1;
`
const StyledDate = styled.div`
  flex: 1;
  text-align: left;
`
const StyledService = styled.div`
  flex: 1;
  text-align: right;
`

const HospitalStaySummary: FC<Props> = ({ hospitalStay }) => {
  if (hospitalStay.metadata.isRedacted) {
    return <Redacted hospitalStay={hospitalStay} />
  }

  return (
    <StyledSummary>
      <StyledDate>
        <PeriodSummary period={hospitalStay.period} />
      </StyledDate>
      {hospitalStay.text && (
        <StyledDescription>
          <Description encounter={hospitalStay} />
        </StyledDescription>
      )}
      <StyledService>
        <ServiceProvider encounter={hospitalStay} />
      </StyledService>
    </StyledSummary>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  hospitalStay: Encounter
}

export default HospitalStaySummary
