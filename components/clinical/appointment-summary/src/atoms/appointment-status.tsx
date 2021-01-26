import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const StyledAppointmentStatus = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: right;
  font-size: smaller;
  padding-top: 0.25rem;
`

const AppointmentStatus: React.FC<Props> = ({ encounter, ...rest }) => (
  <StyledAppointmentStatus {...rest}>{encounter.status && titleCase(encounter.status)}</StyledAppointmentStatus>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  encounter: Encounter
}

export default AppointmentStatus
