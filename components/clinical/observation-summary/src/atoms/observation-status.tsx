import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Observation } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const StledObservationStatus = styled.div`
  color: ${TEXT_COLOURS.SECONDARY};
  text-align: right;
`

const ObservationStatus: React.FC<Props> = ({ observation, ...rest }) => (
  <StledObservationStatus {...rest}>{observation.status && titleCase(observation.status)}</StledObservationStatus>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  observation: Observation
}

export default ObservationStatus
