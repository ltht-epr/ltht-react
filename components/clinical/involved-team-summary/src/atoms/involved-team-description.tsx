import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { EpisodeOfCare } from '@ltht-react/types'

const StyledInvolvedTeamDescription = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const InvolvedTeamDescription: FC<Props> = ({ episodeOfCare, ...rest }) => (
  <StyledInvolvedTeamDescription {...rest}>{episodeOfCare.careManager?.display}</StyledInvolvedTeamDescription>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  episodeOfCare: EpisodeOfCare
}

export default InvolvedTeamDescription
