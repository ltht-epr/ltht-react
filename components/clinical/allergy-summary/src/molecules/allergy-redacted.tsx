import { FC } from 'react'
import styled from '@emotion/styled'

import { AllergyIntolerance } from '@ltht-react/types'
import { DateSummary, RedactedDescription } from '@ltht-react/summary'

const StyledRedactedDescription = styled.div`
  flex-grow: 1;
  text-align: left;
`

const StyledDateSummary = styled.div`
  text-align: right;
`

const AllergyRedacted: FC<Props> = ({ allergy }) => (
  <>
    <StyledRedactedDescription>
      <RedactedDescription />
    </StyledRedactedDescription>
    <StyledDateSummary>
      <DateSummary datetime={allergy?.assertedDate} />
    </StyledDateSummary>
  </>
)

interface Props {
  allergy?: AllergyIntolerance | null
}

export default AllergyRedacted
