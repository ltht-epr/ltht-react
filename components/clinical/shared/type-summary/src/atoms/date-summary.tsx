import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { PartialDateTime } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'

const StyledDateSummary = styled.div<IStyledDateSummary>`
  color: ${TEXT_COLOURS.PRIMARY};
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
  display: inline-block;
`

const DateSummary: FC<Props> = ({ datetime, enteredInError, ...rest }) => (
  <StyledDateSummary enteredInError={enteredInError} {...rest}>
    {partialDateTimeText(datetime)}
  </StyledDateSummary>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  datetime?: PartialDateTime | null
  enteredInError?: boolean | undefined
}

interface IStyledDateSummary {
  enteredInError?: boolean | undefined
}

export default DateSummary
