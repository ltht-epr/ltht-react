/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { EpisodeOfCare } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: right;
`

const InvolvedTeamType = ({ episodeOfCare }: { episodeOfCare: EpisodeOfCare }) => {
  return <div css={styles}>{titleCase(episodeOfCare.status)}</div>
}

export default InvolvedTeamType
