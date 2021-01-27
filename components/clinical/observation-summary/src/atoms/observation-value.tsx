import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Observation } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const StyledObservationValue = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const ObservationValue: React.FC<Props> = ({ observation, ...rest }) => (
  <StyledObservationValue {...rest}>{codeableConceptDisplaySummary(observation.code)}</StyledObservationValue>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  observation: Observation
}

export default ObservationValue
