/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { PRIMARY_TEXT_COLOUR } from '@ltht-react/styles'
import { EpisodeOfCare } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'

const styles = css`
  color: ${PRIMARY_TEXT_COLOUR};
  text-align: right;
`

const InvolvedTeamPeriod = ({ episodeOfCare }: { episodeOfCare: EpisodeOfCare }) => {
  return <div css={styles}>{periodSummaryText(episodeOfCare.period)}</div>
}

export default InvolvedTeamPeriod
