/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { PRIMARY_TEXT_COLOUR } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'
import { codeableConceptTextSummary } from '@ltht-react/utils'

const styles = css`
  color: ${PRIMARY_TEXT_COLOUR};
  text-align: left;
  margin-left: 0.5em;
`

const AppointmentDescription = ({ appointment }: { appointment: Encounter }) => {
  return <div css={styles}>{appointment.type && codeableConceptTextSummary(appointment.type)}</div>
}

export default AppointmentDescription
