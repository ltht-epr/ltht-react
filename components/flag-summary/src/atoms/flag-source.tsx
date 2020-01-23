/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { metadataSourceSummaryText } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: right;
`

const FlagSource = ({ flag }: { flag: Flag }) => {
  return <div css={styles}>{metadataSourceSummaryText(flag.metadata)}</div>
}

export default FlagSource
