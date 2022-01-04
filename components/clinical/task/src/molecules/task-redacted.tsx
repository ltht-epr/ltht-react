import { FC } from 'react'
import styled from '@emotion/styled'
import { RedactedDescription } from '@ltht-react/type-summary'
import { Maybe, Period, TaskStatusCode } from '@ltht-react/types'

import Date from '../atoms/task-date'
import Status from '../atoms/task-status'

const StyledRedacted = styled.div`
  display: flex;
  align-items: center;
`

const StyledRedactedDescription = styled(RedactedDescription)`
  flex: 1;
`

const RightSection = styled.div`
  text-align: right;
`

const Redacted: FC<IProps> = ({ executionPeriod, status }) => (
  <StyledRedacted>
    <StyledRedactedDescription>Insufficient Priveleges</StyledRedactedDescription>
    <RightSection>
      <Date executionPeriod={executionPeriod} status={status} />
      <Status status={status} />
    </RightSection>
  </StyledRedacted>
)

interface IProps {
  executionPeriod?: Maybe<Period>
  status: TaskStatusCode
}

export default Redacted
