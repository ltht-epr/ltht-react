import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Maybe, Scalars } from '@ltht-react/types'

const StyledConditionTitle = styled.div<IStyledDescription>`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
`

const DiagnosisTitle: FC<Props> = ({ text, enteredInError, ...rest }) => (
  <StyledConditionTitle enteredInError={enteredInError} {...rest}>
    {text || 'Insufficient data provided.'}
  </StyledConditionTitle>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  text?: Maybe<Scalars['String']>
  enteredInError: boolean
}

interface IStyledDescription {
  enteredInError: boolean
}

export default DiagnosisTitle
