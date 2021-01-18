/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { EpisodeOfCare } from '@ltht-react/types'
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

const InvolvedTeamRedacted: React.FC<Props> = ({ episodeOfCare }) => {
  return (
    <React.Fragment>
      <div css={styles.description}>
        <RedactedDescription />
      </div>
      <div css={styles.date}>
        <PeriodSummary period={episodeOfCare.period} />
      </div>
    </React.Fragment>
  )
}

interface Props {
  episodeOfCare: EpisodeOfCare
}

export default InvolvedTeamRedacted
