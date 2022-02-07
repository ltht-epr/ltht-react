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

const DateOfBirth: FC<Props> = ({ patient, deceased, ...rest }) => (
  <StyledDateOfBirth {...rest}>
    <StyledLabel>Born</StyledLabel>
    <StyledValue>
      {partialDateTimeText(patient?.birthDate)}
      {!deceased && ` (${formatPatientAge(patient, deceased)})`}
    </StyledValue>
  </StyledDateOfBirth>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  patient: Patient | undefined
  deceased: boolean
}

export default DateOfBirth
