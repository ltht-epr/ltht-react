import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { Patient } from '@ltht-react/types'
import { formatPatientAge } from '@ltht-react/utils'

const StyledAgeAtDeath = styled.div``

const StyledLabel = styled.span`
  color: #ccc;
  font-weight: normal;
  font-size: 0.75rem;
`

const StyledValue = styled.span`
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
  margin-left: 0.5rem;
`

const AgeAtDeath: FC<Props> = ({ patient, ...rest }) => (
  <StyledAgeAtDeath {...rest}>
    <StyledLabel>Age at Death</StyledLabel>
    <StyledValue>{formatPatientAge(patient)}</StyledValue>
  </StyledAgeAtDeath>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  patient: Patient | undefined
}

export default AgeAtDeath
