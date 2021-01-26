import React from 'react'
import styled from '@emotion/styled'

import { Condition } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/summary'

import Category from '../atoms/condition-category'
import Status from '../atoms/condition-status'
import Title from '../atoms/condition-title'
import Redacted from '../molecules/condition-redacted'

const StyledSummary = styled.div`
  display: flex;
  justify-content: center;
`
const StyledDescription = styled.div`
  flex-grow: 1;
`
const StyledDate = styled.div`
  text-align: right;
`

const ConditionSummary: React.FC<Props> = ({ condition }) => {
  if (condition.metadata.isRedacted) {
    return (
      <StyledSummary>
        <Redacted condition={condition} />
      </StyledSummary>
    )
  }

  return (
    <StyledSummary>
      <StyledDescription>
        <Title condition={condition} />
        <Category condition={condition} />
      </StyledDescription>
      <StyledDate>
        <DateSummary datetime={condition?.assertedDate} />
        <Status condition={condition} />
      </StyledDate>
    </StyledSummary>
  )
}

interface Props {
  condition: Condition
}

export default ConditionSummary
