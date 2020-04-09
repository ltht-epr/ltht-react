/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { codeableConceptDisplaySummary, codeableConceptCodeSummary } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const FlagDescription: React.FC<Props> = ({ flag }) => {
  const values = []

  const codeSummary = codeableConceptCodeSummary(flag.code)
  if (codeSummary && codeSummary.length > 0) values.push(codeSummary)

  const categorySummary = flag.category && codeableConceptDisplaySummary(flag.category)
  if (categorySummary && categorySummary.length > 0) values.push(categorySummary)

  return <div css={styles}>{values.join(' - ')}</div>
}

interface Props {
  flag: Flag
}

export default FlagDescription
