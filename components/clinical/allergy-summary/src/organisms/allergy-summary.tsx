/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Styled from '@emotion/styled'

import { AllergyIntolerance } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/summary'

import Title from '../atoms/allergy-title'
import Description from '../atoms/allergy-description'
import Status from '../atoms/allergy-status'
import Icon from '../atoms/allergy-icon'
import Redacted from '../molecules/allergy-redacted'

const StyledAllergy = Styled.div`
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
      <StyledAllergy>
        <Redacted allergy={allergy} />
      </StyledAllergy>
    )
  }

  return (
    <StyledAllergy>
      <StyledIcon>
        <Icon allergy={allergy} />
      </StyledIcon>
      <StyledDescription>
        <Title allergy={allergy} />
        <Description allergy={allergy} />
      </StyledDescription>
      <StyledDate>
        <DateSummary datetime={allergy.assertedDate} />
        <Status allergy={allergy} />
      </StyledDate>
    </StyledAllergy>
  )
}

interface Props {
  allergy: AllergyIntolerance
}

export default AllergySummary
