import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { Patient } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const StyledGender = styled.div``

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

const Gender: FC<Props> = ({ patient, ...rest }) => (
  <StyledGender {...rest}>
    <StyledLabel>Gender</StyledLabel>
    <StyledValue>{patient?.gender && titleCase(patient.gender)}</StyledValue>
  </StyledGender>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  patient: Patient | undefined
}

export default Gender
