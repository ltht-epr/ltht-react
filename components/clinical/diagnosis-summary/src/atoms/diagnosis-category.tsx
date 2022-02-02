import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { codeableConceptDisplaySummary, codeableConceptTextSummary } from '@ltht-react/utils'

const StyledConditionCategory = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const DiagnosisCategory: FC<Props> = ({ condition, ...rest }) => {
  const values = []

  if (condition.category && condition.category.length) values.push(codeableConceptTextSummary(condition.category))
  if (condition.severity) values.push(codeableConceptDisplaySummary(condition.severity))

  return <StyledConditionCategory {...rest}>{values.join(' - ')}</StyledConditionCategory>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
}

export default DiagnosisCategory
