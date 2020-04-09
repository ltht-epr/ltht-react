/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const ConditionStatus: React.FC<Props> = ({ condition }) => {
  const values = []

  if (condition.clinicalStatus) values.push(titleCase(condition.clinicalStatus))
  if (condition.verificationStatus) values.push(titleCase(condition.verificationStatus))

  return <div css={styles}>{values.join(' - ')}</div>
}

interface Props {
  condition: Condition
}

export default ConditionStatus
