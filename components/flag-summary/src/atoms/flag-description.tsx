/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { PRIMARY_TEXT_COLOUR } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const styles = css`
  color: ${PRIMARY_TEXT_COLOUR};
  text-align: left;
`

const FlagDescription = ({ flag }: { flag: Flag }) => {
  return <div css={styles}>{codeableConceptDisplaySummary(flag.code)}</div>
}

export default FlagDescription
