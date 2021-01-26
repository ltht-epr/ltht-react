/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Period } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.PRIMARY};
`

const PeriodSummary: React.FC<Props> = ({ period }) => {
  return <div css={styles}>{periodSummaryText(period)}</div>
}

interface Props {
  period?: Period | null
}

export default PeriodSummary
