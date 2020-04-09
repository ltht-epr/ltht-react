/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { EpisodeOfCare } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: right;
  font-size: smaller;
  padding-top: 0.25rem;
`

const InvolvedTeamType: React.FC<Props> = ({ episodeOfCare }) => {
  return <div css={styles}>{titleCase(episodeOfCare.status)}</div>
}

interface Props {
  episodeOfCare: EpisodeOfCare
}

export default InvolvedTeamType
