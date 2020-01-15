/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: right;
`

const AppointmentServiceProvider = ({ appointment }: { appointment: Encounter }) => {
  return <div css={styles}>{appointment.serviceProvider?.display}</div>
}

export default AppointmentServiceProvider
