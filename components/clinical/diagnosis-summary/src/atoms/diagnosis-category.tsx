import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const StyledConditionCategory = styled.div<IStyledDescription>`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
`

const DiagnosisCategory: FC<Props> = ({ condition, enteredInError, ...rest }) => {
  return (
    <StyledConditionCategory enteredInError={enteredInError} {...rest}>
      {codeableConceptDisplaySummary(condition.severity)}
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
