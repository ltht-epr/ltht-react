import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { Encounter, EncounterStatusCode, Maybe } from '@ltht-react/types'

import { BANNER_COLOURS } from '@ltht-react/styles'
import ServiceProvider from '../atoms/hospital-stay-service-provider'
import Description from '../atoms/hospital-stay-description'
import AdmissionLengthOfStay from '../atoms/admission-length-of-stay'
import AdmissionPeriodSummary from '../atoms/admission-period-summary'
import AdmissionRedacted from '../molecules/admission-redacted'

const StyledSummary = styled.div<IStyledSummaryProps>`
  display: flex;
  justify-content: center;
  ${({ status }) =>
    status === EncounterStatusCode.InProgress
      ? `
    background-color: ${BANNER_COLOURS.HIGHLIGHT.BACKGROUND};
    padding: 5px;
  `
      : ``};
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

const AdmissionSummary: FC<Props> = ({ admission, ...rest }) => {
  if (admission.metadata.isRedacted) {
    return <AdmissionRedacted admission={admission} {...rest} />
  }

  return (
    <StyledSummary {...rest} status={admission.status}>
      <StyledDate>
        <AdmissionPeriodSummary period={admission.period} />
        <AdmissionLengthOfStay encounter={admission} />
      </StyledDate>
      {admission.text && (
        <StyledDescription>
          <Description encounter={admission} />
        </StyledDescription>
      )}
      <StyledService>
        <ServiceProvider encounter={admission} />
      </StyledService>
    </StyledSummary>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  admission: Encounter
}

interface IStyledSummaryProps {
  status?: Maybe<EncounterStatusCode>
}

export default AdmissionSummary
