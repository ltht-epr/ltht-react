/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CARD_BORDER_COLOUR, TABLET_MEDIA_QUERY, DESKTOP_MEDIA_QUERY } from '@ltht-react/styles'
import { GuidanceList } from '@ltht-react/types'
import GuidanceItem from './guidance-item'

const styles = {
  root: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 0 51%;
    margin-left: -1rem;
    margin-top: -0.5rem;
    & > div {
      border-top: 1px solid ${CARD_BORDER_COLOUR};
      margin: 0.5rem 0 0 1rem;
      padding-top: 0.5rem;
      & li {
        margin-left: 1rem;
      }
    }
    ${TABLET_MEDIA_QUERY} {
      & > div {
        flex: 1 0 34%;
        max-width: 50%;
      }
    }
    ${DESKTOP_MEDIA_QUERY} {
      & > div {
        flex: 1;
      }
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
        <GuidanceItem guidance={x} />
      ))}
    </div>
  )
}

interface Props {
  guidanceList: GuidanceList | undefined
}

export default GuidanceSummary
