/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Condition } from '@ltht-react/types'
import { DateSummary, RedactedDescription } from '@ltht-react/summary'

const styles = {
  description: css`
    flex-grow: 1;
    text-align: left;
  `,
  date: css`
    text-align: right;
  `,
}

const ConditionRedacted: React.FC<Props> = ({ condition }) => {
  return (
    <React.Fragment>
      <div css={styles.description}>
        <RedactedDescription />
      </div>
      <div css={styles.date}>
        <DateSummary datetime={condition?.assertedDate} />
      </div>
    </React.Fragment>
  )
}

interface Props {
  condition?: Condition | null
}

export default ConditionRedacted
