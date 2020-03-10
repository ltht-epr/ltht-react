/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_PRIMARY_COLOUR } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_PRIMARY_COLOUR};
  text-align: left;
`

const HospitalStayPeriod: React.FC<Props> = ({ encounter }) => {
  return <div css={styles}>{periodSummaryText(encounter.period)}</div>
}

interface Props {
  encounter: Encounter
}

export default HospitalStayPeriod
