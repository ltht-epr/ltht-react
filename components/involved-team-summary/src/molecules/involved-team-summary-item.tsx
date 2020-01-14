/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { EpisodeOfCare } from '@ltht-react/types'
import InvolvedTeamPeriod from '../atoms/involved-team-period'
import InvolvedTeamDescription from '../atoms/involved-team-description'
import InvolvedTeamType from '../atoms/involved-team-type'
import InvolvedTeamTitle from '../atoms/involved-team-title'

const styles = css`
  display: flex;
  justify-content: center;
`
const descriptionStyles = css`
  flex-grow: 1;
`

const InvolvedTeamSummaryItem = ({ episodeOfCare, clickHandler }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    clickHandler(episodeOfCare)
  }
  return (
    <div css={styles} onClick={handleClick}>
      <div css={descriptionStyles}>
        <InvolvedTeamTitle episodeOfCare={episodeOfCare} />
        <InvolvedTeamDescription episodeOfCare={episodeOfCare} />
      </div>
      <div>
        <InvolvedTeamPeriod episodeOfCare={episodeOfCare} />
        <InvolvedTeamType episodeOfCare={episodeOfCare} />
      </div>
    </div>
  )
}

interface Props {
  episodeOfCare: EpisodeOfCare
  clickHandler(episodeOfCare: EpisodeOfCare): void
}

export default InvolvedTeamSummaryItem
