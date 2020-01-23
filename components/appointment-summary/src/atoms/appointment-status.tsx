/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: right;
`

const AppointmentStatus = ({ appointment }: { appointment: Encounter }) => {
  return <div css={styles}>{appointment.status && titleCase(appointment.status)}</div>
}

export default AppointmentStatus
