import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Condition } from '@ltht-react/types'

const StyledOnsetEstimated = styled.div<IStyledDescription>`
  color: ${TEXT_COLOURS.INFO};
  font-size: x-small;
  white-space: pre-wrap;
  display: inline-block;
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
`

const DiagnosisOnsetEstimated: FC<Props> = ({ condition, enteredInError, ...rest }) => {
  const onsetDateEstimated = condition?.extension?.find((extension) =>
    extension?.url.includes('diagnosis-onset-date-estimated-1')
  )?.valueBoolean

  return (
    <StyledOnsetEstimated enteredInError={enteredInError} {...rest}>
      {onsetDateEstimated ? ' (estimated)' : ''}
    </StyledOnsetEstimated>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
  enteredInError: boolean
}

interface IStyledDescription {
  enteredInError: boolean
}

export default DiagnosisOnsetEstimated
