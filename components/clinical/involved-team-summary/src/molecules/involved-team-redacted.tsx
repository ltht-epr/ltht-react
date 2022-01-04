import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { EpisodeOfCare } from '@ltht-react/types'
import { RedactedDescription, PeriodSummary } from '@ltht-react/type-summary'

const StyledRedacted = styled.div`
  display: flex;
`
const StyledDescription = styled.div`
  flex: 1;
`
const StyledDate = styled.div`
  flex: 1;
  text-align: right;
`

const InvolvedTeamRedacted: FC<Props> = ({ episodeOfCare, ...rest }) => (
  <StyledRedacted {...rest}>
    <StyledDescription>
      <RedactedDescription />
    </StyledDescription>
    <StyledDate>
      <PeriodSummary period={episodeOfCare.period} />
    </StyledDate>
  </StyledRedacted>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  episodeOfCare: EpisodeOfCare
}

export default InvolvedTeamRedacted
