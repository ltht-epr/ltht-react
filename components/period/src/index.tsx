import React from 'react'
import { css } from '@emotion/core'

import { Period as PeriodType } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'
import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'

const styles = {
  layout: css`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  `,
  color: css`
    color: ${TEXT_SECONDARY_COLOUR};
  `,
}

const Period: React.FC<Props> = ({ period }) => {
  if (period?.start?.value || period?.end?.value) {
    return (
      <div css={styles.layout}>
        <div css={styles.color}>Period</div>
        <div>{periodSummaryText(period)}</div>
      </div>
    )
  }
  return <></>
}

interface Props {
  period?: PeriodType | null
}

export default Period
