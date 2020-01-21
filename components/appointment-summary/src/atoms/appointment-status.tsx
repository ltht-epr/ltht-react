/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: right;
`

const AppointmentStatus = ({ appointment }: { appointment: Encounter }) => {
  return <div css={styles}>{appointment.status && titleCase(appointment.status)}</div>
}

export default AppointmentStatus
