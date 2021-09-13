import { FC } from 'react'
import styled from '@emotion/styled'
import { AuditEventContinuation } from '@ltht-react/types'

import TimelineDay from './timeline-day'

const StyledTimeline = styled.div`
  margin: -0.5rem;
`
// todo group days together
const Timeline: FC<IProps> = (props) => (
  <>
    <StyledTimeline>
      <TimelineDay auditItems={props.auditTrail} day="07 June 2021" />
    </StyledTimeline>
  </>
)

interface IProps {
  auditTrail: AuditEventContinuation
}

export default Timeline
