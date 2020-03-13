/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Observation } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY};
  text-align: right;
`

const ObservationStatus: React.FC<Props> = ({ observation }) => {
  return <div css={styles}>{observation.status && titleCase(observation.status)}</div>
}

interface Props {
  observation: Observation
}

export default ObservationStatus
