import { FC, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { CircleIcon } from '@ltht-react/icon'
import { TEXT_COLOURS, BANNER_COLOURS, TABLET_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'
import {
  AuditEvent,
  DocumentReference,
  Maybe,
  QuestionnaireResponse,
  TimelineDomainResourceType,
} from '@ltht-react/types'
import { formatDate, formatDateExplicitMonth, formatTime, isMobileView } from '@ltht-react/utils'
import { useWindowSize } from '@ltht-react/hooks'
import Select from '@ltht-react/select'

import TimelineTime from '../atoms/timeline-time'
import TimelineItem, { ITimelineItem } from '../molecules/timeline-item'
import TimelineItemRedacted from '../molecules/timeline-item-redacted'

const StyledTimeline = styled.div`
  position: relative;
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

const StyledOuterCircle = styled(CircleIcon)`
  position: absolute;
  z-index: 1;
  transform: translate(-50%);
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  left: 50%;
  color: ${TEXT_COLOURS.INFO};
  font-size: 0.75rem;
`

const StyledInnerCircle = styled(CircleIcon)`
  position: absolute;
  z-index: 2;
  top: 0.125rem;
  transform: translate(-50%);
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  left: 50%;
  color: white;
  font-size: 0.5rem;
`

const StyledFilters = styled.div`
  position: sticky;
  margin-bottom: 1rem;
  top: 0;
  background-color: ${BANNER_COLOURS.DEFAULT.BACKGROUND};
  z-index: 1000;
  padding: 0.5em;
  display: block;

  ${TABLET_MINIMUM_MEDIA_QUERY} {
    display: flex;
    padding: 1em;
  }
`

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  ${TABLET_MINIMUM_MEDIA_QUERY} {
    max-width: 200px;
  }

  > select {
    min-width: 100px;
    flex: 2;

    ${TABLET_MINIMUM_MEDIA_QUERY} {
      flex: unset;
    }
  }

  > label {
    flex: 1;
    white-space: pre;
    padding-right: 0.5em;

    ${TABLET_MINIMUM_MEDIA_QUERY} {
      flex: unset;
    }
  }
`

const Timeline: FC<IProps> = ({ timelineItems, domainResourceType, filters, onFilterChange }) => {
  const { width } = useWindowSize()
  const isMobile = isMobileView(width)
  const timelineDates: { [date: string]: { item: Maybe<ITimelineItem>[]; formattedDate: string } } = {}
  const [activeFilters, setActiveFilters] = useState<Record<number, string>>({})
  useEffect(() => setActiveFilters([]), [filters])

  timelineItems?.forEach((timelineItem) => {
    if (!timelineItem?.domainResource) {
      return
    }
    let date = ''
    let displayDate = ''

    switch (domainResourceType) {
      case TimelineDomainResourceType.QuestionnaireResponse: {
        const qr = timelineItem?.domainResource as QuestionnaireResponse
        if (!qr.authored?.value) {
          return
        }
        date = formatDate(new Date(qr.authored?.value))
        displayDate = formatDateExplicitMonth(new Date(qr.authored?.value))
        break
      }

      case TimelineDomainResourceType.DocumentReference: {
        const docRef = timelineItem?.domainResource as DocumentReference
        if (!docRef.created?.value) {
          return
        }
        date = formatDate(new Date(docRef.created.value))
        displayDate = formatDateExplicitMonth(new Date(docRef.created.value))
        break
      }

      case TimelineDomainResourceType.AuditEvent: {
        const audit = timelineItem?.domainResource as AuditEvent
        if (!audit.period?.start?.value) {
          return
        }
        date = formatDate(new Date(audit.period?.start?.value))
        displayDate = formatDateExplicitMonth(new Date(audit.period?.start?.value))
        break
      }
      default:
        throw Error('Unrecognised resource type')
    }

    const lookup = timelineDates[date]
    if (!lookup) {
      timelineDates[date] = { item: [timelineItem], formattedDate: displayDate }
    } else {
      lookup.item.push(timelineItem)
      timelineDates[date] = lookup
    }
  })

  let position = 0

  const handleFilterChange = (key: number, filter?: string) => {
    const newActiveFilters = { ...activeFilters }

    if (filter && filter.length > 0) {
      newActiveFilters[key] = filter
    } else {
      delete newActiveFilters[key]
    }

    setActiveFilters(newActiveFilters)
    onFilterChange && onFilterChange(Object.values(newActiveFilters).filter((x) => x && x.length > 0))
  }

  return (
    <StyledTimeline key="timeline" data-testid="timeline">
      {filters && (
        <StyledFilters>
          {filters.map((filter, key) => (
            <StyledFilter key={key}>
              <label htmlFor={`${filter.label}-${key}`}>{filter.label}:</label>
              <Select
                id={`${filter.label}-${key}`}
                options={filter.options}
                onChange={(e) => handleFilterChange(key, e.target.value)}
              />
            </StyledFilter>
          ))}
        </StyledFilters>
      )}
      {Object.entries(timelineDates).map(([dateKey, value]) => {
        position += 1
        return (
          <div key={dateKey} data-testid={dateKey}>
            <StyledTimelineDayHeader>{value.formattedDate}</StyledTimelineDayHeader>
            <StyledTimelineDayBody isMobile={isMobile}>
              {value.item?.map((timelineItem, idx) => {
                let content: JSX.Element = <></>
                if (!timelineItem?.domainResource) {
                  return <></>
                }
                let currentTime = ''
                let previousTime = ''

                switch (domainResourceType) {
                  case TimelineDomainResourceType.QuestionnaireResponse: {
                    const qr = timelineItem?.domainResource as QuestionnaireResponse
                    if (!qr.authored?.value) {
                      return <></>
                    }
                    currentTime = formatTime(new Date(qr.authored.value))
                    previousTime = currentTime

                    if (idx > 0) {
                      const previousItem = value.item[idx - 1]?.domainResource as QuestionnaireResponse
                      if (!previousItem?.authored?.value) {
                        return <></>
                      }
                      previousTime = formatTime(new Date(previousItem?.authored.value))
                    }
                    break
                  }
                  case TimelineDomainResourceType.DocumentReference: {
                    const docRef = timelineItem?.domainResource as DocumentReference
                    if (!docRef.created?.value) {
                      return <></>
                    }
                    currentTime = formatTime(new Date(docRef.created.value))
                    previousTime = currentTime

                    if (idx > 0) {
                      const previousItem = value.item[idx - 1]?.domainResource as DocumentReference
                      if (!previousItem?.created?.value) {
                        return <></>
                      }
                      previousTime = formatTime(new Date(previousItem?.created?.value))
                    }
                    break
                  }
                  case TimelineDomainResourceType.AuditEvent: {
                    const audit = timelineItem?.domainResource as AuditEvent
                    if (!audit.period?.start?.value) {
                      return <></>
                    }
                    currentTime = formatTime(new Date(audit.period?.start?.value))
                    previousTime = currentTime

                    if (idx > 0) {
                      const previousItem = value.item[idx - 1]?.domainResource as AuditEvent
                      if (!previousItem?.period?.start?.value) {
                        return <></>
                      }
                      previousTime = formatTime(new Date(previousItem?.period?.start?.value))
                    }
                    break
                  }
                }

                if (currentTime !== previousTime) {
                  position += 1
                }

                const itemKey = `timeline_day_item_${dateKey}_${currentTime}_${idx}`

                const isRedacted = timelineItem.domainResource.metadata.isRedacted ?? false

                if (isMobile) {
                  content = (
                    <StyledTimelineDayContent isMobile>
                      {isRedacted ? (
                        <TimelineItemRedacted />
                      ) : (
                        <TimelineItem timelineItem={timelineItem} domainResourceType={domainResourceType} />
                      )}
                    </StyledTimelineDayContent>
                  )
                } else if (position % 2 === 1) {
                  const contentKey = `content_left_${itemKey}`
                  content = (
                    <div key={contentKey} data-testid={contentKey}>
                      <StyledTimelineDayContent isMobile={false}>
                        {isRedacted ? (
                          <TimelineItemRedacted />
                        ) : (
                          <TimelineItem timelineItem={timelineItem} domainResourceType={domainResourceType} />
                        )}
                      </StyledTimelineDayContent>
                      <StyledTimelineDayLine>
                        <StyledOuterCircle status="info" size="medium" />
                        <StyledInnerCircle status="info" size="medium" />
                      </StyledTimelineDayLine>
                      <StyledTimelineDayTimeRight>
                        <TimelineTime
                          domainResource={timelineItem?.domainResource}
                          domainResourceType={domainResourceType}
                        />
                      </StyledTimelineDayTimeRight>
                    </div>
                  )
                } else if (position % 2 === 0) {
                  const contentKey = `content_right_${itemKey}`
                  content = (
                    <div key={contentKey} data-testid={contentKey}>
                      <StyledTimelineDayTimeLeft>
                        <TimelineTime
                          domainResource={timelineItem?.domainResource}
                          domainResourceType={domainResourceType}
                        />
                      </StyledTimelineDayTimeLeft>
                      <StyledTimelineDayLine>
                        <StyledOuterCircle status="info" size="medium" />
                        <StyledInnerCircle status="info" size="medium" />
                      </StyledTimelineDayLine>
                      <StyledTimelineDayContent isMobile={false}>
                        {isRedacted ? (
                          <TimelineItemRedacted />
                        ) : (
                          <TimelineItem timelineItem={timelineItem} domainResourceType={domainResourceType} />
                        )}
                      </StyledTimelineDayContent>
                    </div>
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
  domainResourceType: TimelineDomainResourceType
  filters?: ITimelineFilter[]
  onFilterChange?: (value: string[]) => void
}

interface IStyledMobile {
  isMobile: boolean
}

export interface ITimelineFilter {
  label: string
  options: {
    value?: string
    label: string
  }[]
}

export default Timeline
