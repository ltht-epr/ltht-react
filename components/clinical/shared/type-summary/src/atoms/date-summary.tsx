import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { PartialDateTime } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'

const StyledDateSummary = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
`

const DateSummary: FC<Props> = ({ datetime, ...rest }) => (
  <StyledDateSummary {...rest}>{partialDateTimeText(datetime)}</StyledDateSummary>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  datetime?: PartialDateTime | null
}

export default DateSummary
