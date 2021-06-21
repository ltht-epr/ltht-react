import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'

const StyledHospitalStayDescription = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
  margin-left: 0.5em;
`

const HospitalStayDescription: FC<Props> = ({ encounter, ...rest }) => {
  if (encounter.text)
    return <StyledHospitalStayDescription {...rest}>{encounter.text.text}</StyledHospitalStayDescription>

  return null
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  encounter: Encounter
}

export default HospitalStayDescription
