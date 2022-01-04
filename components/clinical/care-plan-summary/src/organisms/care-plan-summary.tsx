import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { CarePlan } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/type-summary'

import Description from '../atoms/care-plan-description'
import Status from '../atoms/care-plan-status'
import Title from '../atoms/care-plan-title'
import Redacted from '../molecules/care-plan-redacted'

const StyledSummary = styled.div`
  display: flex;
  justify-content: center;
`
const StyledDescription = styled.div`
  flex-grow: 1;
`
const StyledDate = styled.div`
  text-align: right;
`

const CarePlanSummary: FC<Props> = ({ carePlan, ...rest }) => {
  if (carePlan.metadata.isRedacted) {
    return (
      <StyledSummary {...rest}>
        <Redacted carePlan={carePlan} />
      </StyledSummary>
    )
  }

  return (
    <StyledSummary {...rest}>
      <StyledDescription>
        <Title carePlan={carePlan} />
        <Description carePlan={carePlan} />
      </StyledDescription>
      <StyledDate>
        <PeriodSummary period={carePlan.period} />
        <Status carePlan={carePlan} />
      </StyledDate>
    </StyledSummary>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  carePlan: CarePlan
}

export default CarePlanSummary
