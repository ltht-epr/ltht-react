import { FC } from 'react'
import styled from '@emotion/styled'

import { CarePlan } from '@ltht-react/types'
import { RedactedDescription, PeriodSummary } from '@ltht-react/summary'

const StyledRedactedDescription = styled.div`
  flex-grow: 1;
  text-align: left;
`

const StyledPeriodSummary = styled.div`
  text-align: right;
`

const CarePlanRedacted: FC<Props> = ({ carePlan }) => (
  <>
    <StyledRedactedDescription>
      <RedactedDescription />
    </StyledRedactedDescription>
    <StyledPeriodSummary>
      <PeriodSummary period={carePlan.period} />
    </StyledPeriodSummary>
  </>
)

interface Props {
  carePlan: CarePlan
}

export default CarePlanRedacted
