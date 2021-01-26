import React from 'react'
import Styled from '@emotion/styled'

import { AllergyIntolerance } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/summary'

import Title from '../atoms/allergy-title'
import Description from '../atoms/allergy-description'
import Status from '../atoms/allergy-status'
import Icon from '../atoms/allergy-icon'
import Redacted from '../molecules/allergy-redacted'

const StyledSummary = Styled.div`
  display: flex;
  justify-content: center;
`

const StyledIcon = Styled.div`
  min-width: 1rem;
`

const StyledDescription = Styled.div`
  flex-grow: 1;
  padding-left: 0.5rem;
`

const StyledDate = Styled.div`
  text-align: right;
`

const AllergySummary: React.FC<Props> = ({ allergy }) => {
  if (allergy.metadata.isRedacted) {
    return (
      <StyledSummary>
        <Redacted allergy={allergy} />
      </StyledSummary>
    )
  }

  return (
    <StyledSummary>
      <StyledIcon>
        <Icon criticalityCode={allergy.criticality} />
      </StyledIcon>
      <StyledDescription>
        <Title allergy={allergy} />
        <Description allergy={allergy} />
      </StyledDescription>
      <StyledDate>
        <DateSummary datetime={allergy.assertedDate} />
        <Status allergy={allergy} />
      </StyledDate>
    </StyledSummary>
  )
}

interface Props {
  allergy: AllergyIntolerance
}

export default AllergySummary
