import { FC } from 'react'
import styled from '@emotion/styled'
import { TRANSLUCENT_DARK_BLUE } from '@ltht-react/styles'
import { AuditEvent, Maybe } from '@ltht-react/types'
import { useWindowSize } from '@ltht-react/hooks'
import { isMobileView } from '@ltht-react/utils'

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

const StyledTimelineTime = styled.div`
  color: black;
`

const StyledTimelineItemTop = styled.div`
  display: flex;
  color: black;
  padding-bottom: 0.25rem;
`

const StyledTimelineItemMiddle = styled.div`
  color: black;
  padding-bottom: 1rem;
`

const StyledTimelineItemBottom = styled.div`
  color: grey;
  display: flex;
`

const StyledTitle = styled.div<IStyledMobile>`
  flex-grow: 1;
  color: black;
  font-size: ${({ isMobile }) => (isMobile ? 'medium' : 'large')};
  font-weight: bold;
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
          {isMobile ? (
            <StyledTimelineTime>
              <TimelineTime audit={props.audit} />
            </StyledTimelineTime>
          ) : null}
        </StyledTimelineItemTop>
        <StyledTimelineItemMiddle>
          <StyledDescription>
            <TimelineDescription outcomeDesc={props.audit.outcomeDesc} />
          </StyledDescription>
        </StyledTimelineItemMiddle>
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
