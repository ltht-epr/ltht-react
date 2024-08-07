import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { codeableConceptTextSummary, titleCase } from '@ltht-react/utils'

const StyledConditionTitle = styled.div<IStyledDescription>`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
`

const DiagnosisTitle: FC<Props> = ({ condition, enteredInError, ...rest }) => {
  const codes = []
  const snippets = []

  if (condition.code) codes.push(condition.code)
  snippets.push(codeableConceptTextSummary(codes))
  if (condition.clinicalStatus) snippets.push(titleCase(condition.clinicalStatus))
  if (condition.verificationStatus) snippets.push(titleCase(condition.verificationStatus))

  return (
    <StyledConditionTitle enteredInError={enteredInError} {...rest}>
      {snippets.length > 0 ? snippets.join(', ') : 'Insufficient data provided'}
    </StyledConditionTitle>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
  enteredInError: boolean
}

interface IStyledDescription {
  enteredInError: boolean
}

export default DiagnosisTitle
