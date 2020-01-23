/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { codeableConceptDisplaySummary, codeableConceptCodeSummary } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: left;
`

const FlagDescription = ({ flag }: { flag: Flag }) => {
  let values = []

  const codeSummary = codeableConceptCodeSummary(flag.code)
  if (codeSummary && codeSummary.length > 0) values.push(codeSummary)

  const categorySummary = flag.category && codeableConceptDisplaySummary(flag.category)
  if (categorySummary && categorySummary.length > 0) values.push(categorySummary)

  return <div css={styles}>{values.join(' - ')}</div>
}

export default FlagDescription
