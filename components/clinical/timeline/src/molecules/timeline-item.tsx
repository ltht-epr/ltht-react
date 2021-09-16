import { FC } from 'react'
import styled from '@emotion/styled'
import { TRANSLUCENT_DARK_BLUE } from '@ltht-react/styles'
import { AuditEvent, Maybe } from '@ltht-react/types'

import { isMobileView } from '@ltht-react/utils'
import { useWindowSize } from '@ltht-react/hooks'
import TimelineDescription from '../atoms/timeline-description'
import TimelineAuthor from '../atoms/timeline-author'
import TimelineStatus from '../atoms/timeline-status'
import TimelineTitle from '../atoms/timeline-title'
import TimelineTime from '../atoms/timeline-time'

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

const StyledTitle = styled.div<IStyledMobile>`
  color: black;
  font-size: ${({ isMobile }) => (isMobile ? 'medium' : 'large')};
  font-weight: bold;
  padding-bottom: 0.25rem;
`

const StyledDescription = styled.div`
  color: black;
  font-size: small;
`

const StyledStatus = styled.div`
  text-align: right;
`

const TimelineItem: FC<IProps> = (props) => {
  const { width } = useWindowSize()
  const isMobile = isMobileView(width)

  if (!props.audit) {
    return <></>
  }

  return (
    <>
      <StyledTimelineItem>
        <StyledTimelineItemTop>
          <StyledTitle isMobile={isMobile}>
            <TimelineTitle audit={props.audit} />
          </StyledTitle>
          {props.audit ? <TimelineTime audit={null}>Test</TimelineTime> : ''}
          <StyledDescription>
            {/* placeholder delete */}
            <TimelineDescription description={props.audit?.description} />
          </StyledDescription>
        </StyledTimelineItemTop>
        <StyledTimelineItemBottom>
          <StyledTimelineItemLeft>
            <TimelineAuthor audit={props.audit} />
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
}

interface IProps {
  audit: Maybe<AuditEvent>
}

interface IStyledMobile {
  isMobile: boolean
}

export default TimelineItem
