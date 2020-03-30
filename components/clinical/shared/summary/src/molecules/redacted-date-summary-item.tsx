/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { PartialDateTime, RedactedPosition } from '@ltht-react/types'
import { DateSummary, RedactedDescription } from '../atoms'

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

const RedactedDateSummaryItem: React.FC<Props> = ({ datetime, position }) => {
  const leftMarkup = (
    <React.Fragment>
      <div css={styles.descriptionLeft}>
        <RedactedDescription />
      </div>
      <div css={styles.dateRight}>
        <DateSummary datetime={datetime} />
      </div>
    </React.Fragment>
  )

  const rightMarkup = (
    <React.Fragment>
      <div css={styles.dateLeft}>
        <DateSummary datetime={datetime} />
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
  datetime?: PartialDateTime | null
  position: RedactedPosition
}

export default RedactedDateSummaryItem
