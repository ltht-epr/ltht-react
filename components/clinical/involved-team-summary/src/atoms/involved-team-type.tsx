import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { EpisodeOfCare } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const StyledInvolvedTeamType = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: right;
  font-size: smaller;
  padding-top: 0.25rem;
`

const InvolvedTeamType: FC<Props> = ({ episodeOfCare, ...rest }) => (
  <StyledInvolvedTeamType {...rest}>{titleCase(episodeOfCare.status)}</StyledInvolvedTeamType>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  episodeOfCare: EpisodeOfCare
}

export default InvolvedTeamType
