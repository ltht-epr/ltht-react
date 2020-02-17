/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_PRIMARY_COLOUR } from '@ltht-react/styles'
import { EpisodeOfCare } from '@ltht-react/types'
import { resourceReferenceDisplaySummary } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_PRIMARY_COLOUR};
  text-align: left;
`

const InvolvedTeamTitle: React.FC<Props> = ({ episodeOfCare }) => {
  return <div css={styles}>{episodeOfCare.team && resourceReferenceDisplaySummary(episodeOfCare.team)}</div>
}

interface Props {
  episodeOfCare: EpisodeOfCare
}

export default InvolvedTeamTitle
