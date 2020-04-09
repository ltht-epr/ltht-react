/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { codeableConceptDisplaySummary, codeableConceptTextSummary } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const ConditionCategory: React.FC<Props> = ({ condition }) => {
  const values = []

  if (condition.category) values.push(codeableConceptTextSummary(condition.category))
  if (condition.severity) values.push(codeableConceptDisplaySummary(condition.severity))

  return <div css={styles}>{values.join(' - ')}</div>
}

interface Props {
  condition: Condition
}

export default ConditionCategory
