import { FC } from 'react'
import styled from '@emotion/styled'

import { Condition } from '@ltht-react/types'
import { DateSummary, RedactedDescription } from '@ltht-react/summary'

const StyledRedactedDescription = styled.div`
  flex-grow: 1;
  text-align: left;
`

const StyledDateSummary = styled.div`
  text-align: right;
`

const ConditionRedacted: FC<Props> = ({ condition }) => (
  <>
    <StyledRedactedDescription>
      <RedactedDescription />
    </StyledRedactedDescription>
    <StyledDateSummary>
      <DateSummary datetime={condition?.assertedDate} />
    </StyledDateSummary>
  </>
)

interface Props {
  condition?: Condition | null
}

export default ConditionRedacted
