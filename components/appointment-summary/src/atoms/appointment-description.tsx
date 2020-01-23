/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_PRIMARY_COLOUR } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_PRIMARY_COLOUR};
  text-align: left;
  margin-left: 0.5em;
`

const AppointmentDescription = ({ appointment }: { appointment: Encounter }) => {
  return <div css={styles}>{appointment.text && appointment.text.text}</div>
}

export default AppointmentDescription
