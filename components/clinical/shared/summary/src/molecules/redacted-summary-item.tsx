/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { RedactedDescription } from '../atoms'

const styles = {
  description: css`
    flex-grow: 1;
    text-align: left;
  `,
}

const RedactedSummaryItem: React.FC = () => {
  return (
    <React.Fragment>
      <div css={styles.description}>
        <RedactedDescription />
      </div>
    </React.Fragment>
  )
}

export default RedactedSummaryItem
