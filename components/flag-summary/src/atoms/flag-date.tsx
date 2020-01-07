/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { PRIMARY_TEXT_COLOUR } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'

const styles = css`
  color: ${PRIMARY_TEXT_COLOUR};
  text-align: right;
`

const FlagDate = ({ flag }: { flag: Flag }) => {
  return <div css={styles}>{periodSummaryText(flag.period)}</div>
}

export default FlagDate
