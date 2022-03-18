import { FC } from 'react'
import styled from '@emotion/styled'

import { Condition } from '@ltht-react/types'
import { DateSummary, RedactedDescription } from '@ltht-react/type-summary'

const StyledRedactedDescription = styled.div`
  flex-grow: 1;
  text-align: left;
`

const StyledDateSummary = styled.div`
  text-align: right;
`

const DiagnosisRedacted: FC<Props> = ({ condition }) => (
  <>
    <StyledRedactedDescription>
      <RedactedDescription />
    </StyledRedactedDescription>
    <StyledDateSummary>
      <DateSummary datetime={condition?.onset?.dateTime} />
    </StyledDateSummary>
  </>
)

interface Props {
  condition?: Condition | null
}

export default DiagnosisRedacted
