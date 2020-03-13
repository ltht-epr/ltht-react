/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const AppointmentDate: React.FC<Props> = ({ encounter }) => {
  return <div css={styles}>{partialDateTimeText(encounter.period?.start)}</div>
}

interface Props {
  encounter: Encounter
}

export default AppointmentDate
