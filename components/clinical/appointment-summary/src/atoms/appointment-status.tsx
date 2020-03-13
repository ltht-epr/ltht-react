/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY};
  text-align: right;
`

const AppointmentStatus: React.FC<Props> = ({ encounter }) => {
  return <div css={styles}>{encounter.status && titleCase(encounter.status)}</div>
}

interface Props {
  encounter: Encounter
}

export default AppointmentStatus
