/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Period, RedactedPosition } from '@ltht-react/types'
import { RedactedDescription, PeriodSummary } from '../atoms'

const styles = {
  descriptionLeft: css`
    flex-grow: 1;
    text-align: left;
  `,
  dateRight: css`
    text-align: right;
  `,

  dateLeft: css`
    text-align: left;
  `,
  descriptionRight: css`
    flex-grow: 1;
    text-align: right;
  `,
}

const RedactedPeriodSummaryItem: React.FC<Props> = ({ period, position }) => {
  const leftMarkup = (
    <React.Fragment>
      <div css={styles.descriptionLeft}>
        <RedactedDescription />
      </div>
      <div css={styles.dateRight}>
        <PeriodSummary period={period} />
      </div>
    </React.Fragment>
  )

  const rightMarkup = (
    <React.Fragment>
      <div css={styles.dateLeft}>
        <PeriodSummary period={period} />
      </div>
      <div css={styles.descriptionRight}>
        <RedactedDescription />
      </div>
    </React.Fragment>
  )

  switch (position) {
    case RedactedPosition.Left:
      return leftMarkup
    case RedactedPosition.Right:
      return rightMarkup
    default:
      return <React.Fragment />
  }
}

interface Props {
  period?: Period | null
  position: RedactedPosition
}

export default RedactedPeriodSummaryItem
