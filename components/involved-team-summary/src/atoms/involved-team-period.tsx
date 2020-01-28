/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_PRIMARY_COLOUR } from '@ltht-react/styles'
import { EpisodeOfCare } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_PRIMARY_COLOUR};
  text-align: right;
`

const InvolvedTeamPeriod: React.FC<Props> = ({ episodeOfCare }) => {
  return <div css={styles}>{periodSummaryText(episodeOfCare.period)}</div>
}

interface Props {
  episodeOfCare: EpisodeOfCare
}

export default InvolvedTeamPeriod
