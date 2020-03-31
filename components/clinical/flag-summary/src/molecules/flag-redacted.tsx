/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import { RedactedDescription, PeriodSummary } from '@ltht-react/summary'

const styles = {
  description: css`
    flex-grow: 1;
    text-align: left;
  `,
  date: css`
    text-align: right;
  `,
}

const FlagRedacted: React.FC<Props> = ({ flag }) => {
  return (
    <React.Fragment>
      <div css={styles.description}>
        <RedactedDescription />
      </div>
      <div css={styles.date}>
        <PeriodSummary period={flag.period} />
      </div>
    </React.Fragment>
  )
}

interface Props {
  flag: Flag
}

export default FlagRedacted
