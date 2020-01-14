/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { EpisodeOfCare } from '@ltht-react/types'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: right;
`

const InvolvedTeamType = ({ episodeOfCare }: { episodeOfCare: EpisodeOfCare }) => {
  return <div css={styles}>{episodeOfCare.status.toString()}</div>
}

export default InvolvedTeamType
