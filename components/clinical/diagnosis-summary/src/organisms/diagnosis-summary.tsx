import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { Condition } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/type-summary'

import Category from '../atoms/diagnosis-category'
import Status from '../atoms/diagnosis-status'
import Title from '../atoms/diagnosis-title'
import Redacted from '../molecules/diagnosis-redacted'

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

const DiagnosisSummary: FC<Props> = ({ condition, ...rest }) => {
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

export default DiagnosisSummary
