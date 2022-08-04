import { FC } from 'react'
import styled from '@emotion/styled'
import { CircleIcon } from '@ltht-react/icon'
import { TEXT_COLOURS, BANNER_COLOURS } from '@ltht-react/styles'
import { AuditEvent, DocumentReference, Maybe } from '@ltht-react/types'
import { formatDateExplicitMonth, formatTime, isMobileView } from '@ltht-react/utils'
import { useWindowSize } from '@ltht-react/hooks'

import TimelineTime from '../atoms/timeline-time'
import TimelineItem, { ITimelineItem } from '../molecules/timeline-item'
import isDocumentReference from '../methods'

const StyledTimeline = styled.div`
  margin: -0.75rem;
`

const StyledTimelineDayBody = styled.div<IStyledMobile>`
  background-color: white;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    height: ${({ isMobile }) => (isMobile ? '0%' : '100%')};
    left: calc(50% - 1px);
    border-width: 0 0 0 2px;
    border-color: ${TEXT_COLOURS.INFO};
    border-style: solid;
  }
`

const StyledTimelineDayHeader = styled.div`
  background-color: ${BANNER_COLOURS.DEFAULT.BACKGROUND};
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
`

const StyledTimelineDayItem = styled.div<IStyledMobile>`
  display: inline-block;
  width: 100%;
  justify-content: center;
  padding: ${({ isMobile }) => (isMobile ? '' : '0 0.5rem')};
  margin: ${({ isMobile }) => (isMobile ? '0.5rem 0' : '1rem 0')};
`

const StyledTimelineDayContent = styled.div<IStyledMobile>`
  width: ${({ isMobile }) => (isMobile ? '100%' : '49%')};
  padding: 0 0.5rem;
  display: inline-block;
  vertical-align: top;
`

const StyledTimelineDayLine = styled.div`
  width: 2%;
  vertical-align: top;
  margin-top: 0.125rem;
  display: inline-block;
  text-align: center;
  position: relative;
  height: 100%;
`

const StyledTimelineDayTimeLeft = styled.div`
  width: 49%;
  padding: 0 0.5rem;
  display: inline-block;
  vertical-align: top;
  text-align: right;
  font-weight: bold;
`

const StyledTimelineDayTimeRight = styled.div`
  width: 49%;
  padding: 0 0.5rem;
  display: inline-block;
  vertical-align: top;
  text-align: left;
  font-weight: bold;
`

const StyledOuterCircle = styled.div`
  .icon__circle {
    position: absolute;
    z-index: 1;
    transform: translate(-50%);
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    left: 50%;
    color: ${TEXT_COLOURS.INFO};
    font-size: 0.75rem;
  }
`

const StyledInnerCircle = styled.div`
  .icon__circle {
    position: absolute;
    z-index: 2;
    top: 0.125rem;
    transform: translate(-50%);
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    left: 50%;
    color: white;
    font-size: 0.5rem;
  }
`

const Timeline: FC<IProps> = ({ timelineItems }) => {
  const { width } = useWindowSize()
  const isMobile = isMobileView(width)

  const resources = timelineItems.map((i) => i?.domainResource)
  const timelineDates: { [date: string]: Maybe<ITimelineItem>[] } = {}

  timelineItems?.forEach((timelineItem) => {
    if (!timelineItem?.domainResource) {
      return
    }
    if (isDocumentReference(timelineItem?.domainResource)) {
      const docRef = timelineItem?.domainResource as DocumentReference
      if (!docRef.created?.value) {
        return
      }
      const date = formatDateExplicitMonth(new Date(docRef.created.value))
      const lookup = timelineDates[date]
      if (!lookup) {
        timelineDates[date] = [timelineItem]
      } else {
        lookup.push(timelineItem)
        timelineDates[date] = lookup
      }
    } else {
      const audit = timelineItem?.domainResource as AuditEvent
      if (!audit.period?.start?.value) {
        return
      }
      const date = formatDateExplicitMonth(new Date(audit.period?.start?.value))
      const lookup = timelineDates[date]
      if (!lookup) {
        timelineDates[date] = [timelineItem]
      } else {
        lookup.push(timelineItem)
        timelineDates[date] = lookup
      }
    }
  })

  let position = 0

  return (
    <StyledTimeline key="timeline" data-testid="timeline">
      {Object.entries(timelineDates).map(([dateKey, value]) => {
        position += 1
        return (
          <div key={dateKey} data-testid={dateKey}>
            <StyledTimelineDayHeader>{dateKey}</StyledTimelineDayHeader>
            <StyledTimelineDayBody isMobile={isMobile}>
              {value?.map((timelineItem, idx) => {
                let content: JSX.Element = <></>
                if (!timelineItem?.domainResource) {
                  return <></>
                }
                let currentTime = ''
                let previousTime = ''
                if (isDocumentReference(timelineItem?.domainResource)) {
                  const docRef = timelineItem?.domainResource as DocumentReference
                  if (!docRef.created?.value) {
                    return <></>
                  }
                  currentTime = formatTime(new Date(docRef.created.value))
                  previousTime = currentTime

                  if (idx > 0) {
                    const previousItem = resources[idx - 1] as DocumentReference
                    if (!previousItem?.created?.value) {
                      return <></>
                    }
                    previousTime = formatTime(new Date(previousItem?.created?.value))
                  }
                } else {
                  const audit = timelineItem?.domainResource as AuditEvent
                  if (!audit.period?.start?.value) {
                    return <></>
                  }
                  currentTime = formatTime(new Date(audit.period?.start?.value))
                  previousTime = currentTime

                  if (idx > 0) {
                    const previousItem = resources[idx - 1] as AuditEvent
                    if (!previousItem?.period?.start?.value) {
                      return <></>
                    }
                    previousTime = formatTime(new Date(previousItem?.period?.start?.value))
                  }
                }

                if (currentTime !== previousTime) {
                  position += 1
                }

                const itemKey = `timeline_day_item_${currentTime}_${idx}`

                if (isMobile) {
                  content = (
                    <StyledTimelineDayContent isMobile>
                      <TimelineItem timelineItem={timelineItem} />
                    </StyledTimelineDayContent>
                  )
                } else if (position % 2 === 1) {
                  content = (
                    <>
                      <StyledTimelineDayContent isMobile={false}>
                        <TimelineItem timelineItem={timelineItem} />
                      </StyledTimelineDayContent>
                      <StyledTimelineDayLine>
                        <StyledOuterCircle>
                          <CircleIcon status="info" size="medium" />
                        </StyledOuterCircle>
                        <StyledInnerCircle>
                          <CircleIcon status="info" size="medium" />
                        </StyledInnerCircle>
                      </StyledTimelineDayLine>
                      <StyledTimelineDayTimeRight>
                        <TimelineTime domainResource={timelineItem?.domainResource} />
                      </StyledTimelineDayTimeRight>
                    </>
                  )
                } else if (position % 2 === 0) {
                  content = (
                    <>
                      <StyledTimelineDayTimeLeft>
                        <TimelineTime domainResource={timelineItem?.domainResource} />
                      </StyledTimelineDayTimeLeft>
                      <StyledTimelineDayLine>
                        <StyledOuterCircle>
                          <CircleIcon status="info" size="medium" />
                        </StyledOuterCircle>
                        <StyledInnerCircle>
                          <CircleIcon status="info" size="medium" />
                        </StyledInnerCircle>
                      </StyledTimelineDayLine>
                      <StyledTimelineDayContent isMobile={false}>
                        <TimelineItem timelineItem={timelineItem} />
                      </StyledTimelineDayContent>
                    </>
                  )
                }

                return (
                  <StyledTimelineDayItem isMobile={isMobile} key={itemKey} data-testid={itemKey}>
                    {content}
                  </StyledTimelineDayItem>
                )
              })}
            </StyledTimelineDayBody>
          </div>
        )
      })}
    </StyledTimeline>
  )
}

interface IProps {
  timelineItems: Maybe<ITimelineItem>[]
}

interface IStyledMobile {
  isMobile: boolean
}

export default Timeline
