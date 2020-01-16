/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { PRIMARY_TEXT_COLOUR } from '@ltht-react/styles'
import { HospitalStay } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'

const styles = css`
  color: ${PRIMARY_TEXT_COLOUR};
  text-align: left;
`

const HospitalStayPeriod = ({ hospitalStay }: { hospitalStay: HospitalStay }) => {
  return <div css={styles}>{periodSummaryText(hospitalStay.period)}</div>
}

export default HospitalStayPeriod
