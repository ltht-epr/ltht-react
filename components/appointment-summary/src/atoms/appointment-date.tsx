/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { PRIMARY_TEXT_COLOUR } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'

const styles = css`
  color: ${PRIMARY_TEXT_COLOUR};
  text-align: left;
`

const AppointmentDate = ({ appointment }: { appointment: Encounter }) => {
  return <div css={styles}>{partialDateTimeText(appointment.period?.start)}</div>
}

export default AppointmentDate
