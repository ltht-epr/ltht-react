import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition, ConditionVerificationStatus } from '@ltht-react/types'
import { codeableConceptDisplaySummary, codeableConceptTextSummary } from '@ltht-react/utils'

const StyledConditionCategory = styled.div<IStyledDescription>`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
`

const DiagnosisCategory: FC<Props> = ({ condition, enteredInError, ...rest }) => {
  const values = []
  enteredInError = false

  if (condition.category && condition.category.length) values.push(codeableConceptTextSummary(condition.category))
  if (condition.severity) values.push(codeableConceptDisplaySummary(condition.severity))

  if (condition.verificationStatus === ConditionVerificationStatus.EnteredinError) enteredInError = true

  return (
    <StyledConditionCategory enteredInError={enteredInError} {...rest}>
      {values.join(' - ')}
    </StyledConditionCategory>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
  enteredInError: boolean
}

interface IStyledDescription {
  enteredInError: boolean
}

export default DiagnosisCategory
