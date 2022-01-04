import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Period } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'

const StyledPeriodSummary = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
`

const PeriodSummary: FC<Props> = ({ period, ...rest }) => (
  <StyledPeriodSummary {...rest}>{periodSummaryText(period)}</StyledPeriodSummary>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  period?: Period | null
}

export default PeriodSummary
