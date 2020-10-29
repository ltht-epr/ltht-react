/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Styled from '@emotion/styled'

import { EpisodeOfCare } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/summary'

import Description from '../atoms/involved-team-description'
import Type from '../atoms/involved-team-type'
import Title from '../atoms/involved-team-title'
import Redacted from '../molecules/involved-team-redacted'

const StyledSummary = Styled.div`
  display: flex;
`
const StyledDescription = Styled.div`
  flex: 1;
`
const StyledDate = Styled.div`
  flex: 1;
  text-align: right;
`

const InvolvedTeamSummary: React.FC<Props> = ({ episodeOfCare }) => {
  if (episodeOfCare.metadata.isRedacted) {
    return <Redacted episodeOfCare={episodeOfCare} />
  }

  return (
    <StyledSummary>
      <StyledDescription>
        <Title episodeOfCare={episodeOfCare} />
        <Description episodeOfCare={episodeOfCare} />
      </StyledDescription>
      <StyledDate>
        <PeriodSummary period={episodeOfCare.period} />
        <Type episodeOfCare={episodeOfCare} />
      </StyledDate>
    </StyledSummary>
  )
}

interface Props {
  episodeOfCare: EpisodeOfCare
}

export default InvolvedTeamSummary
