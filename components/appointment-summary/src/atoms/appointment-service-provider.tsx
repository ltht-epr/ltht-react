/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: right;
`

const AppointmentServiceProvider = ({ appointment }: { appointment: Encounter }) => {
  return <div css={styles}>{appointment.serviceProvider?.display}</div>
}

export default AppointmentServiceProvider
