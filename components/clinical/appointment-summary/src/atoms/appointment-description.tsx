import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'

const StyledAppointmentDescription = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
  margin-left: 0.5em;
`

const AppointmentDescription: FC<Props> = ({ encounter, ...rest }) => {
  if (encounter.text)
    return <StyledAppointmentDescription {...rest}>{encounter.text.text}</StyledAppointmentDescription>

  return null
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  encounter: Encounter
}

export default AppointmentDescription
