import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Encounter, Maybe } from '@ltht-react/types'

const StyledAppointmentServiceProvider = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: right;
`

const AppointmentServiceProvider: FC<Props> = ({ encounter, ...rest }) => {
  let provider: Maybe<string> | undefined = encounter.serviceProvider?.display

  if (!provider) {
    provider = encounter.metadata.dataSources.length !== 0 ? encounter.metadata.dataSources[0]?.display : ''
  }

  return <StyledAppointmentServiceProvider {...rest}>{provider}</StyledAppointmentServiceProvider>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  encounter: Encounter
}

export default AppointmentServiceProvider
