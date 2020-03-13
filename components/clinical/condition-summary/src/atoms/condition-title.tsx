/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { codeableConceptTextSummary } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const ConditionTitle: React.FC<Props> = ({ condition }) => {
  const codes = []
  if (condition.code) codes.push(condition.code)

  return <div css={styles}>{codeableConceptTextSummary(codes)}</div>
}

interface Props {
  condition: Condition
}

export default ConditionTitle
