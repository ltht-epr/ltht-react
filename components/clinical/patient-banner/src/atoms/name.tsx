import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { Patient } from '@ltht-react/types'
import { formatPatientName } from '@ltht-react/utils'

const StyledName = styled.span`
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
`

const Name: React.FC<Props> = ({ patient, ...rest }) => <StyledName {...rest}>{formatPatientName(patient)}</StyledName>

interface Props extends HTMLAttributes<HTMLSpanElement> {
  patient: Patient | undefined
}

export default Name
