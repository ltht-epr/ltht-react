import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { Patient } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'

const StyledDateOfDeath = styled.div``

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

const DateOfDeath: FC<Props> = ({ patient, ...rest }) => (
  <StyledDateOfDeath {...rest}>
    <StyledLabel>Died</StyledLabel>
    <StyledValue>{partialDateTimeText(patient?.deceased?.deceasedDateTime)}</StyledValue>
  </StyledDateOfDeath>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  patient: Patient | undefined
}

export default DateOfDeath
