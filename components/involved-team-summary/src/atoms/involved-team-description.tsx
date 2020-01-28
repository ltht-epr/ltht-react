/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { EpisodeOfCare } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: left;
`

const InvolvedTeamDescription: React.FC<Props> = ({ episodeOfCare }) => {
  return <div css={styles}>{episodeOfCare.careManager?.display}</div>
}

interface Props {
  episodeOfCare: EpisodeOfCare
}

export default InvolvedTeamDescription
