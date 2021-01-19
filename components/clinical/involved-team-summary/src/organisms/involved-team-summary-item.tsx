/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { EpisodeOfCare } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/summary'

import Description from '../atoms/involved-team-description'
import Type from '../atoms/involved-team-type'
import Title from '../atoms/involved-team-title'
import Redacted from '../molecules/involved-team-redacted'

const styles = {
  root: css`
    display: flex;
    justify-content: center;

    & > div {
      flex-grow: 1;
    }
  `,
  date: css`
    text-align: right;
  `,
}

const InvolvedTeamSummaryItem: React.FC<Props> = ({ episodeOfCare, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler(episodeOfCare)
  }

  const summaryMarkup = (
    <React.Fragment>
      <div>
        <Title episodeOfCare={episodeOfCare} />
        <Description episodeOfCare={episodeOfCare} />
      </div>
      <div css={styles.date}>
        <PeriodSummary period={episodeOfCare.period} />
        <Type episodeOfCare={episodeOfCare} />
      </div>
    </React.Fragment>
  )

  return (
    <div role="link" css={styles.root} onClick={clickHandler && handleClick}>
      {episodeOfCare.metadata.isRedacted ? <Redacted episodeOfCare={episodeOfCare} /> : summaryMarkup}
    </div>
  )
}

interface Props {
  episodeOfCare: EpisodeOfCare
  clickHandler?(episodeOfCare: EpisodeOfCare): void
}

export default InvolvedTeamSummaryItem
