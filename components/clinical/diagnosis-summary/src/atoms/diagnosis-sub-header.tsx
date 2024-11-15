import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'

const StyledConditionSubHeader = styled.div<IStyledDescription>`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
`

const DiagnosisSubHeader: FC<Props> = ({ text, enteredInError, ...rest }) => (
  <StyledConditionSubHeader enteredInError={enteredInError} {...rest}>
    {text}
  </StyledConditionSubHeader>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string
  enteredInError: boolean
}

interface IStyledDescription {
  enteredInError: boolean
}

export default DiagnosisSubHeader
