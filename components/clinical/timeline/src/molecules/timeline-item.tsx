import { FC } from 'react'
import styled from '@emotion/styled'
import Banner from '@ltht-react/banner'
import { ChevronIcon, ExternalLinkIcon } from '@ltht-react/icon'
import { HIGHLIGHT_GREEN, TRANSLUCENT_DARK_BLUE } from '@ltht-react/styles'
import { AuditEvent, Maybe } from '@ltht-react/types'
import { useWindowSize } from '@ltht-react/hooks'
import { isMobileView } from '@ltht-react/utils'
import TimelineDescription from '../atoms/timeline-description'
import TimelineAuthor from '../atoms/timeline-author'
import TimelineStatus from '../atoms/timeline-status'
import TimelineTitle from '../atoms/timeline-title'
import TimelineTime from '../atoms/timeline-time'

const StyledTimelineItem = styled.div<IStyledTimelineItem>`
  background-color: ${({ isSelected }) => (isSelected ? HIGHLIGHT_GREEN.VALUE : TRANSLUCENT_DARK_BLUE)};
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

const StyledBanner = styled(Banner)`
  margin: -0.5rem;
  margin-top: 0.5rem;
`

const StyledBannerContent = styled.div``

const TimelineItem: FC<IProps> = ({ timelineItem }) => {
  const { width } = useWindowSize()
  const isMobile = isMobileView(width)

  if (!timelineItem?.auditEvent) {
    return <></>
  }

  return (
    <>
      <StyledTimelineItem isSelected={timelineItem.isSelected}>
        <StyledTimelineItemTop>
          <StyledTitle isMobile={isMobile}>
            <TimelineTitle audit={timelineItem.auditEvent} />
          </StyledTitle>
          {isMobile && (
            <StyledTimelineTime>
              <TimelineTime audit={timelineItem.auditEvent} />
            </StyledTimelineTime>
          )}
        </StyledTimelineItemTop>
        <StyledTimelineItemMiddle>
          <StyledDescription>
            <TimelineDescription outcomeDesc={timelineItem.auditEvent.outcomeDesc} />
          </StyledDescription>
        </StyledTimelineItemMiddle>
        <StyledTimelineItemBottom>
          <StyledTimelineItemLeft>
            <TimelineAuthor audit={timelineItem.auditEvent} />
          </StyledTimelineItemLeft>
          <StyledTimelineItemRight>
            <StyledStatus>
              <TimelineStatus />
            </StyledStatus>
          </StyledTimelineItemRight>
        </StyledTimelineItemBottom>
        {timelineItem.clickHandler && !timelineItem.isSelected && (
          <StyledBanner type="info" onClick={timelineItem.clickHandler}>
            {timelineItem.clickPrompt && <StyledBannerContent>{timelineItem.clickPrompt}</StyledBannerContent>}
          </StyledBanner>
        )}
        {timelineItem.clickHandler && timelineItem.isSelected && (
          <StyledBanner type="highlight" onClick={timelineItem.clickHandler}>
            {timelineItem.deselectPrompt && <StyledBannerContent>{timelineItem.deselectPrompt}</StyledBannerContent>}
          </StyledBanner>
        )}
      </StyledTimelineItem>
    </>
  )
}

interface IProps {
  timelineItem: Maybe<ITimelineItem>
}

export interface ITimelineItem {
  auditEvent: Maybe<AuditEvent>
  clickHandler?(): void
  clickPrompt?: string
  isSelected: boolean
  deselectPrompt?: string
}

interface IStyledTimelineItem {
  isSelected: boolean
}

interface IStyledMobile {
  isMobile: boolean
}

export default TimelineItem
