/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
  margin-left: 0.5em;
`

const HospitalStayDescription: React.FC<Props> = ({ encounter }) => {
  return <div css={styles}>{encounter.text && encounter.text.text}</div>
}

interface Props {
  encounter: Encounter
}

export default HospitalStayDescription
