/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CARD_BORDER_COLOUR } from '@ltht-react/styles'
import { GuidanceList } from '@ltht-react/types'
import GuidanceSummaryItem from './organisms/guidance-summary-item'

const styles = {
  root: css`
    > div {
      margin-right: -0.5rem;
      padding-bottom: 0.5rem;
      > ul {
        padding: 0.25rem 0 0 1rem;
      }
    }
    > div:not(:first-child) {
      border-top: 1px solid ${CARD_BORDER_COLOUR};
      padding-top: 0.5rem;
    }
  `,
}

const GuidanceSummary: React.FC<Props> = ({ guidanceList = undefined }) => {
  if (!guidanceList?.guidance) {
    return null
  }

  return (
    <div css={styles.root}>
      {guidanceList.guidance.map(x => (
        <GuidanceSummaryItem guidance={x} />
      ))}
    </div>
  )
}

interface Props {
  guidanceList: GuidanceList | undefined
}

export default GuidanceSummary
