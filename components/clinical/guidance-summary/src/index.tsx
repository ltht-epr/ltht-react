/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CARD_BORDER_COLOUR } from '@ltht-react/styles'
import { GuidanceList } from '@ltht-react/types'
import GuidanceSummaryItem from './organisms/guidance-summary-item'

const styles = {
  root: css`
    > div {
      padding-bottom: 0.5rem;
    }
    > ul {
      padding: 0 0 0.75rem 1.25rem;
    }
    > div:not(:first-of-type) {
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
        <GuidanceSummaryItem key={x?.id} guidance={x} />
      ))}
    </div>
  )
}

interface Props {
  guidanceList: GuidanceList | undefined
}

export default GuidanceSummary
