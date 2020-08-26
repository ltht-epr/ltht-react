/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CARD_BORDER_COLOUR } from '@ltht-react/styles'
import { Guidance } from '@ltht-react/types'
import GuidanceSummaryItem from './organisms/guidance-summary-item'

const styles = {
  root: css`
    > div {
      margin-right: -0.5rem;
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
  if (!guidanceList) {
    return null
  }

  return (
    <div css={styles.root}>
      {guidanceList.map(x => (
        <GuidanceSummaryItem key={x?.id} guidance={x} />
      ))}
    </div>
  )
}

interface Props {
  guidanceList: Array<Guidance> | undefined
}

export default GuidanceSummary
