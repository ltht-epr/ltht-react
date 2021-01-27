import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'

const StyledHospitalStayDescription = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
  margin-left: 0.5em;
`

const HospitalStayDescription: React.FC<Props> = ({ encounter, ...rest }) => (
  <StyledHospitalStayDescription {...rest}>{encounter.text && encounter.text.text}</StyledHospitalStayDescription>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  encounter: Encounter
}

export default HospitalStayDescription
