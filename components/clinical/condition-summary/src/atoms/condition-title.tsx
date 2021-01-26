import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'
import { codeableConceptTextSummary } from '@ltht-react/utils'

const StyledConditionTitle = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const ConditionTitle: React.FC<Props> = ({ condition, ...rest }) => {
  const codes = []
  if (condition.code) codes.push(condition.code)

  return <StyledConditionTitle {...rest}>{codeableConceptTextSummary(codes)}</StyledConditionTitle>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
}

export default ConditionTitle
