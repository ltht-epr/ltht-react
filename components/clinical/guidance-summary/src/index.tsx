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
      padding: 0.5rem 0 0.5rem 0;
      border-top: 1px solid ${CARD_BORDER_COLOUR};
    }
    ul {
      padding: 0.5rem 0 0 1.25rem;
    }
    span {
      display: block;
      padding: 0.5rem 0 0 1rem;
    }
    > div:not(:first-of-type) {
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
