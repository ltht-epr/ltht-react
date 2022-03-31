import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { codeableConceptTextSummary } from '@ltht-react/utils'

const StyledConditionTitle = styled.div<IStyledDescription>`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
`

const DiagnosisTitle: FC<Props> = ({ condition, enteredInError, ...rest }) => {
  const codes = []

  if (condition.code) codes.push(condition.code)

  return (
    <StyledConditionTitle enteredInError={enteredInError} {...rest}>
      {codeableConceptTextSummary(codes)}
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
