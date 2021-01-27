import React from 'react'
import styled from '@emotion/styled'

import { Observation } from '@ltht-react/types'
import Status from '../atoms/observation-status'
import Value from '../atoms/observation-value'
import Redacted from '../molecules/observation-redacted'

const StyledSummary = styled.div`
  display: flex;
`
const StyledValue = styled.div`
  flex: 1;
`
const StyledStatus = styled.div`
  flex: 1;
  text-align: right;
`

const ObservationSummaryItem: React.FC<Props> = ({ observation, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler(observation)
  }

  if (observation.metadata.isRedacted) {
    return <Redacted />
  }

  return (
    <StyledSummary onClick={clickHandler && handleClick}>
      <StyledValue>
        <Value observation={observation} />
      </StyledValue>
      <StyledStatus>
        <Status observation={observation} />
      </StyledStatus>
    </StyledSummary>
  )
}

interface Props {
  observation: Observation
  clickHandler?(observation: Observation): void
}

export default ObservationSummaryItem
