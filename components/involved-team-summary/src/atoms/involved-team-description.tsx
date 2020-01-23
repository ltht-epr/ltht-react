/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { EpisodeOfCare } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: left;
`

const InvolvedTeamDescription = ({ episodeOfCare }: { episodeOfCare: EpisodeOfCare }) => {
  return <div css={styles}>{episodeOfCare.careManager?.display}</div>
}

export default InvolvedTeamDescription
