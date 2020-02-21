/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: left;
`

const ConditionStatus: React.FC<Props> = ({ condition }) => {
  return <div css={styles}>{condition.clinicalStatus && titleCase(condition.clinicalStatus)}</div>
}

interface Props {
  condition: Condition
}

export default ConditionStatus
