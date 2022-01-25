import { FC } from 'react'
import styled from '@emotion/styled'

import { AllergyIntolerance } from '@ltht-react/types'
import { DateSummary, RedactedDescription } from '@ltht-react/type-summary'

const StyledRedactedDescription = styled.div`
  flex-grow: 1;
  text-align: left;
`

const StyledDateSummary = styled.div`
  text-align: right;
`

const AllergyRedacted: FC<Props> = ({ allergy, showDates }) => (
  <>
    <StyledRedactedDescription>
      <RedactedDescription />
    </StyledRedactedDescription>
    <StyledDateSummary>{showDates && <DateSummary datetime={allergy?.assertedDate} />}</StyledDateSummary>
  </>
)

interface Props {
  allergy?: AllergyIntolerance | null
  showDates?: boolean
}

export default AllergyRedacted
