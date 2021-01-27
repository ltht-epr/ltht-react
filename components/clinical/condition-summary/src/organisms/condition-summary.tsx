import React, { HTMLAttributes } from 'react'
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

const ConditionSummary: React.FC<Props> = ({ condition, ...rest }) => {
  if (condition.metadata.isRedacted) {
    return (
      <StyledSummary {...rest}>
        <Redacted condition={condition} />
      </StyledSummary>
    )
  }

  return (
    <StyledSummary {...rest}>
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

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
}

export default ConditionSummary
