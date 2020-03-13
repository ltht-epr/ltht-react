/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: right;
`

const ConditionDate: React.FC<Props> = ({ condition }) => {
  return <div css={styles}>{partialDateTimeText(condition.assertedDate)}</div>
}

interface Props {
  condition: Condition
}

export default ConditionDate
