/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { codeableConceptDisplaySummary, codeableConceptCodeSummary } from '@ltht-react/utils'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: left;
`

const FlagDescription = ({ flag }: { flag: Flag }) => {
  return (
    <div css={styles}>
      {codeableConceptCodeSummary(flag.code)} {flag.category && `- ${codeableConceptDisplaySummary(flag.category)}`}
    </div>
  )
}

export default FlagDescription
