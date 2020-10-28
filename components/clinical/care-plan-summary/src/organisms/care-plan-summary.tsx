/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Styled from '@emotion/styled'

import { CarePlan } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/summary'

import Description from '../atoms/care-plan-description'
import Status from '../atoms/care-plan-status'
import Title from '../atoms/care-plan-title'
import Redacted from '../molecules/care-plan-redacted'

const StyledCarePlan = Styled.div`
  display: flex;
  justify-content: center;
`
const StyledDescription = Styled.div`
  flex-grow: 1;
`
const StyledDate = Styled.div`
  text-align: right;
`

const CarePlanSummary: React.FC<Props> = ({ carePlan }) => {
  if (carePlan.metadata.isRedacted) {
    return (
      <StyledCarePlan>
        <Redacted carePlan={carePlan} />
      </StyledCarePlan>
    )
  }

  return (
    <StyledCarePlan>
      <StyledDescription>
        <Title carePlan={carePlan} />
        <Description carePlan={carePlan} />
      </StyledDescription>
      <StyledDate>
        <PeriodSummary period={carePlan.period} />
        <Status carePlan={carePlan} />
      </StyledDate>
    </StyledCarePlan>
  )
}

interface Props {
  carePlan: CarePlan
}

export default CarePlanSummary
