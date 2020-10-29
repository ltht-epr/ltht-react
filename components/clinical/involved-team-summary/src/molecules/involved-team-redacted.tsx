/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Styled from '@emotion/styled'

import { EpisodeOfCare } from '@ltht-react/types'
import { RedactedDescription, PeriodSummary } from '@ltht-react/summary'

const StyledRedacted = Styled.div`
  display: flex;
`
const StyledDescription = Styled.div`
  flex: 1;
`
const StyledDate = Styled.div`
  flex: 1;
  text-align: right;
`

const InvolvedTeamRedacted: React.FC<Props> = ({ episodeOfCare }) => {
  return (
    <StyledRedacted>
      <StyledDescription>
        <RedactedDescription />
      </StyledDescription>
      <StyledDate>
        <PeriodSummary period={episodeOfCare.period} />
      </StyledDate>
    </StyledRedacted>
  )
}

interface Props {
  episodeOfCare: EpisodeOfCare
}

export default InvolvedTeamRedacted
