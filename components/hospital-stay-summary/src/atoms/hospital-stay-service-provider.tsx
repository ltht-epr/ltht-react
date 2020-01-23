/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: right;
`

const HospitalStayServiceProvider = ({ hospitalStay }: { hospitalStay: Encounter }) => {
  return <div css={styles}>{hospitalStay.serviceProvider?.display}</div>
}

export default HospitalStayServiceProvider
