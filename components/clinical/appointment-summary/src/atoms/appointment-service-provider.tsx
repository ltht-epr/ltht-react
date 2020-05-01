/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: right;
`

const AppointmentServiceProvider: React.FC<Props> = ({ encounter }) => {
  let provider = encounter.serviceProvider?.display

  if (!provider) {
    provider = encounter.metadata.dataSources.length !== 0 ? encounter.metadata.dataSources[0]?.display : ''
  }

  return <div css={styles}>{provider}</div>
}

interface Props {
  encounter: Encounter
}

export default AppointmentServiceProvider
