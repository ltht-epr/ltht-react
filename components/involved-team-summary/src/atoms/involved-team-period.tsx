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

const InvolvedTeamPeriod = ({ episodeOfCare }: { episodeOfCare: EpisodeOfCare }) => {
  return <div css={styles}>{periodSummaryText(episodeOfCare.period)}</div>
}

export default InvolvedTeamPeriod
