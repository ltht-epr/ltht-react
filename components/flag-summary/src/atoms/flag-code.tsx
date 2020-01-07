/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { codeableConceptCodeSummary } from '@ltht-react/utils'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: left;
`

const FlagCode = ({ flag }: { flag: Flag }) => {
  return <div css={styles}>{codeableConceptCodeSummary(flag.code)}</div>
}

export default FlagCode
