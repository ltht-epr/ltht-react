import { FC } from 'react'
import styled from '@emotion/styled'

import TimelineDay from './timeline-day'

const StyledTimeline = styled.div`
  margin: -0.5rem;
`

const Timeline: FC = () => (
  <>
    <StyledTimeline>
      <TimelineDay />
      <TimelineDay />
      <TimelineDay />
      <TimelineDay />
      <TimelineDay />
    </StyledTimeline>
  </>
)

export default Timeline
