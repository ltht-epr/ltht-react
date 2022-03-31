import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { Condition, ConditionVerificationStatus } from '@ltht-react/types'
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

  const enteredInError = condition.verificationStatus === ConditionVerificationStatus.EnteredinError

  return (
    <StyledSummary {...rest}>
      <StyledDescription>
        <Title enteredInError={enteredInError} condition={condition} />
        <Category enteredInError={enteredInError} condition={condition} />
      </StyledDescription>
      <StyledDate>
        <DateSummary datetime={condition?.onset?.dateTime} />
        <Status enteredInError={enteredInError} condition={condition} />
      </StyledDate>
    </StyledSummary>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
}

export default DiagnosisSummary
