/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CarePlan } from '@ltht-react/types'
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

const CarePlanRedacted: React.FC<Props> = ({ carePlan }) => {
  return (
    <React.Fragment>
      <div css={styles.description}>
        <RedactedDescription />
      </div>
      <div css={styles.date}>
        <PeriodSummary period={carePlan.period} />
      </div>
    </React.Fragment>
  )
}

interface Props {
  carePlan: CarePlan
}

export default CarePlanRedacted
