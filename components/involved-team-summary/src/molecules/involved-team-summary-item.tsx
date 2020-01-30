/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { EpisodeOfCare } from '@ltht-react/types'
import Period from '../atoms/involved-team-period'
import Description from '../atoms/involved-team-description'
import Type from '../atoms/involved-team-type'
import Title from '../atoms/involved-team-title'

const styles = css`
  display: flex;
  justify-content: center;

  & > div {
    flex-grow: 1;
  }
`

const InvolvedTeamSummaryItem: React.FC<Props> = ({ episodeOfCare, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler(episodeOfCare)
  }
  return (
    <div role="link" css={styles} onClick={clickHandler && handleClick}>
      <div>
        <Title episodeOfCare={episodeOfCare} />
        <Description episodeOfCare={episodeOfCare} />
      </div>
      <div>
        <Period episodeOfCare={episodeOfCare} />
        <Type episodeOfCare={episodeOfCare} />
      </div>
    </div>
  )
}

interface Props {
  episodeOfCare: EpisodeOfCare
  clickHandler?(episodeOfCare: EpisodeOfCare): void
}

export default InvolvedTeamSummaryItem
