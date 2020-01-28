/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: right;
`

const HospitalStayServiceProvider: React.FC<Props> = ({ encounter }) => {
  return <div css={styles}>{encounter.serviceProvider?.display}</div>
}

interface Props {
  encounter: Encounter
}

export default HospitalStayServiceProvider
