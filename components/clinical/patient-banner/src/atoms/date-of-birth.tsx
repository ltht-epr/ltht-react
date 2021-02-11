import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { Patient } from '@ltht-react/types'
import { formatPatientAge, partialDateTimeText } from '@ltht-react/utils'

const StyledDateOfBirth = styled.div``

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

const DateOfBirth: FC<Props> = ({ patient, ...rest }) => (
  <StyledDateOfBirth {...rest}>
    <StyledLabel>Born</StyledLabel>
    <StyledValue>
      {partialDateTimeText(patient?.birthDate)}
      {!patient?.deceased?.deceasedBoolean && ` (${formatPatientAge(patient)})`}
    </StyledValue>
  </StyledDateOfBirth>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  patient: Patient | undefined
}

export default DateOfBirth
