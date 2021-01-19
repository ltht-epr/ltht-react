/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Encounter } from '@ltht-react/types'
import { RedactedDescription, PeriodSummary } from '@ltht-react/summary'

const styles = {
  description: css`
    flex-grow: 1;
    text-align: right;
  `,
  date: css`
    text-align: left;
  `,
}

const HospitalStayRedacted: React.FC<Props> = ({ hospitalStay }) => {
  return (
    <React.Fragment>
      <div css={styles.date}>
        <PeriodSummary period={hospitalStay.period} />
      </div>
      <div css={styles.description}>
        <RedactedDescription />
      </div>
    </React.Fragment>
  )
}

interface Props {
  hospitalStay: Encounter
}

export default HospitalStayRedacted
