import React from 'react'
import styled from '@emotion/styled'

import { Encounter } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/summary'

import ServiceProvider from '../atoms/appointment-service-provider'
import Description from '../atoms/appointment-description'
import Status from '../atoms/appointment-status'
import Redacted from '../molecules/appointment-redacted'

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

const AppointmentSummary: React.FC<Props> = ({ encounter }) => {
  if (encounter.metadata.isRedacted) {
    return (
      <StyledSummary>
        <Redacted appointment={encounter} />
      </StyledSummary>
    )
  }

  return (
    <StyledSummary>
      <StyledDate>
        <DateSummary datetime={encounter?.period?.start} />
      </StyledDate>
      <StyledDescription>
        <Description encounter={encounter} />
      </StyledDescription>
      <StyledService>
        <ServiceProvider encounter={encounter} />
        <Status encounter={encounter} />
      </StyledService>
    </StyledSummary>
  )
}

interface Props {
  encounter: Encounter
}

export default AppointmentSummary
