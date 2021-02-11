import { FC } from 'react'
import styled from '@emotion/styled'

import { EpisodeOfCare } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/summary'

import Description from '../atoms/involved-team-description'
import Type from '../atoms/involved-team-type'
import Title from '../atoms/involved-team-title'
import Redacted from '../molecules/involved-team-redacted'

const StyledSummary = styled.div`
  display: flex;
`
const StyledDescription = styled.div`
  flex: 1;
`
const StyledDate = styled.div`
  flex: 1;
  text-align: right;
`

const InvolvedTeamSummary: FC<Props> = ({ episodeOfCare }) => {
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
