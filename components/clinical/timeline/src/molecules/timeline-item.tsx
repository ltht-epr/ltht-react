import { FC } from 'react'
import styled from '@emotion/styled'
import { TRANSLUCENT_DARK_BLUE } from '@ltht-react/styles'
import { AuditEvent, Maybe } from '@ltht-react/types'

import TimelineDescription from '../atoms/timeline-description'
import TimelineAuthor from '../atoms/timeline-author'
import TimelineStatus from '../atoms/timeline-status'
import TimelineTitle from '../atoms/timeline-title'

const StyledTimelineItem = styled.div`
  background-color: ${TRANSLUCENT_DARK_BLUE};
  padding: 0.5rem;
`

const StyledTimelineItemLeft = styled.div`
  flex-grow: 1;
`

const StyledTimelineItemRight = styled.div`
  text-align: right;
`

const StyledTimelineItemTop = styled.div`
  color: black;
  padding-bottom: 1rem;
`

const StyledTimelineItemBottom = styled.div`
  color: grey;
  display: flex;
`

const StyledTitle = styled.div`
  color: black;
  font-size: large;
  font-weight: bold;
`

const StyledDescription = styled.div`
  color: black;
  font-size: small;
`

const StyledStatus = styled.div`
  text-align: right;
`

const TimelineItem: FC<IProps> = () => (
  <>
    <StyledTimelineItem>
      <StyledTimelineItemTop>
        <StyledTitle>
          <TimelineTitle />
        </StyledTitle>
        <StyledDescription>
          <TimelineDescription />
        </StyledDescription>
      </StyledTimelineItemTop>
      <StyledTimelineItemBottom>
        <StyledTimelineItemLeft>
          <TimelineAuthor />
        </StyledTimelineItemLeft>
        <StyledTimelineItemRight>
          <StyledStatus>
            <TimelineStatus />
          </StyledStatus>
        </StyledTimelineItemRight>
      </StyledTimelineItemBottom>
    </StyledTimelineItem>
  </>
)

interface IProps {
  audit: Maybe<AuditEvent>
}

export default TimelineItem
