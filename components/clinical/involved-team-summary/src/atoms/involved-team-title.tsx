import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { EpisodeOfCare } from '@ltht-react/types'
import { resourceReferenceDisplaySummary } from '@ltht-react/utils'

const StyledInvolvedTeamTitle = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const InvolvedTeamTitle: FC<Props> = ({ episodeOfCare, ...rest }) => (
  <StyledInvolvedTeamTitle {...rest}>
    {episodeOfCare.team && resourceReferenceDisplaySummary(episodeOfCare.team)}
  </StyledInvolvedTeamTitle>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  episodeOfCare: EpisodeOfCare
}

export default InvolvedTeamTitle
