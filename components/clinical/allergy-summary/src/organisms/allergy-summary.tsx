import { FC, HTMLAttributes } from 'react'
import Styled from '@emotion/styled'

import { AllergyIntolerance, AllergyIntoleranceCriticalityCode } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/type-summary'

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
`

const StyledDate = Styled.div`
  text-align: right;
`

const AllergySummary: FC<Props> = ({ allergy, showDates = true, ...rest }) => {
  const showIcon =
    allergy.criticality === AllergyIntoleranceCriticalityCode.High ||
    allergy.criticality === AllergyIntoleranceCriticalityCode.Low

  if (allergy.metadata.isRedacted) {
    return (
      <StyledSummary {...rest}>
        <Redacted allergy={allergy} showDates={showDates} />
      </StyledSummary>
    )
  }

  return (
    <StyledSummary {...rest}>
      {showIcon && (
        <StyledIcon>
          <Icon criticalityCode={allergy.criticality} />
        </StyledIcon>
      )}
      <StyledDescription>
        <Title allergy={allergy} />
        <Description allergy={allergy} />
      </StyledDescription>
      <StyledDate>
        {showDates && <DateSummary datetime={allergy.assertedDate} />}
        <Status allergy={allergy} />
      </StyledDate>
    </StyledSummary>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  allergy: AllergyIntolerance
  showDates?: boolean
  enteredInError?: boolean | undefined
}

export default AllergySummary
