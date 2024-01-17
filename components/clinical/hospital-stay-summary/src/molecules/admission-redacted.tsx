import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { Encounter } from '@ltht-react/types'
import { RedactedDescription } from '@ltht-react/type-summary'
import AdmissionPeriodSummary from '../atoms/admission-period-summary'

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

const AdmissionRedacted: FC<Props> = ({ admission, ...rest }) => (
  <StyledRedacted {...rest}>
    <StyledDate>
      <AdmissionPeriodSummary period={admission.period} />
    </StyledDate>
    <StyledDescription>
      <RedactedDescription />
    </StyledDescription>
  </StyledRedacted>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  admission: Encounter
}

export default AdmissionRedacted
