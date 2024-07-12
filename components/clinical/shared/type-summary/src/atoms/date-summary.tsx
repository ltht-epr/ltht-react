import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { PartialDateTime } from '@ltht-react/types'
import { partialDateTimeText, formatPartialDateTimeAsDateOnly } from '@ltht-react/utils'

const StyledDateSummary = styled.div<IStyledDateSummary>`
  color: ${TEXT_COLOURS.PRIMARY};
  text-decoration: ${({ enteredInError }) => (enteredInError ? 'line-through' : 'none')};
  display: inline-block;
`

const DateSummary: FC<Props> = ({ datetime, enteredInError, dateOnlyView, ...rest }) => (
  <StyledDateSummary enteredInError={enteredInError} dateOnlyView={dateOnlyView} {...rest}>
    {dateOnlyView ? formatPartialDateTimeAsDateOnly(datetime) : partialDateTimeText(datetime)}
  </StyledDateSummary>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  datetime?: PartialDateTime | null
  enteredInError?: boolean | undefined
  dateOnlyView?: boolean
}

interface IStyledDateSummary {
  enteredInError?: boolean | undefined
  dateOnlyView?: boolean
}

export default DateSummary
