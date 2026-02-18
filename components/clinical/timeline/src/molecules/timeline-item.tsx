import { FC } from 'react'
import styled from '@emotion/styled'
import { HIGHLIGHT_GREEN, TRANSLUCENT_DARK_BLUE } from '@ltht-react/styles'
import {
  AuditEvent,
  DocumentReference,
  Maybe,
  QuestionnaireResponse,
  TimelineDomainResourceType,
} from '@ltht-react/types'
import { useWindowSize } from '@ltht-react/hooks'
import { isMobileView } from '@ltht-react/utils'
import CountersignatureIconAndStatusBadge, {
  GetCountersignaturePropsFromTimelineItem,
} from '@ltht-react/countersignature'
import TimelineDescription from '../atoms/timeline-description'
import TimelineAuthor from '../atoms/timeline-author'
import TimelineTitle from '../atoms/timeline-title'
import TimelineTime from '../atoms/timeline-time'
import TimelineButton from '../atoms/timeline-button'

const StyledTimelineItem = styled.div<IStyledTimelineItem>`
  background-color: ${({ isSelected }) => (isSelected ? HIGHLIGHT_GREEN.VALUE : TRANSLUCENT_DARK_BLUE)};
  padding-top: 0.5rem;
`

const StyledTimelineAuthor = styled(TimelineAuthor)`
  flex-grow: 1;
  margin-bottom: 0.5rem;
`

const StyledCountersignatureIconAndStatus = styled(CountersignatureIconAndStatusBadge)`
  flex-grow: 1;
  margin-bottom: 0.5rem;
`

const StyledTimelineTime = styled(TimelineTime)`
  color: black;
`

const StyledTimelineItemTop = styled.div`
  display: flex;
  color: black;
  padding-bottom: 0.25rem;
  margin: 0.5rem;
`

const StyledTimelineItemMiddle = styled.div`
  color: black;
  padding-bottom: 1rem;
  margin: 0.5rem;
`

const StyledTimelineCountersignature = styled.div`
  color: black;
  margin: 0.5rem;
`

const StyledTimelineItemBottom = styled.div`
  color: grey;
  display: flex;
  margin: 0.5rem;
`

const StyledTimelineTitle = styled(TimelineTitle, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<IStyledMobile>`
  flex-grow: 1;
  color: black;
  font-size: ${({ isMobile }) => (isMobile ? 'medium' : 'large')};
  font-weight: bold;
`

const StyledTimelineDescription = styled(TimelineDescription)`
  color: black;
  font-size: small;
`

const TimelineItem: FC<IProps> = ({ timelineItem, domainResourceType }) => {
  const { width } = useWindowSize()
  const isMobile = isMobileView(width)

  if (!timelineItem?.domainResource) {
    return <></>
  }

  const { domainResource, buttonState } = timelineItem

  const itemKey = `timelineItem_${domainResource.id}`

  return (
    <StyledTimelineItem isSelected={buttonState === 'selected-button'} key={itemKey}>
      <StyledTimelineItemTop>
        <StyledTimelineTitle
          isMobile={isMobile}
          domainResource={domainResource}
          domainResourceType={domainResourceType}
        />
        {isMobile && (
          <StyledTimelineTime domainResource={timelineItem.domainResource} domainResourceType={domainResourceType} />
        )}
      </StyledTimelineItemTop>
      <StyledTimelineItemMiddle>
        <StyledTimelineDescription
          domainResource={timelineItem.domainResource}
          domainResourceType={domainResourceType}
        />
      </StyledTimelineItemMiddle>
      <StyledTimelineItemBottom>
        <StyledTimelineAuthor domainResource={timelineItem.domainResource} domainResourceType={domainResourceType} />
      </StyledTimelineItemBottom>
      <StyledTimelineCountersignature>
        <StyledCountersignatureIconAndStatus
          {...GetCountersignaturePropsFromTimelineItem(timelineItem.domainResource, domainResourceType)}
        />
      </StyledTimelineCountersignature>
      <TimelineButton timelineItem={timelineItem} />
    </StyledTimelineItem>
  )
}

interface IProps {
  timelineItem: Maybe<ITimelineItem>
  domainResourceType: TimelineDomainResourceType
}

export interface ITimelineItem {
  domainResource?: Maybe<AuditEvent | QuestionnaireResponse | DocumentReference>
  buttonState: TimeLineItemButtonState
  itemClickHandler?(): void
  pointInTimeClickHandler?: (date: Date) => void
  buttonText?: string
}

type TimeLineItemButtonState = 'no-button' | 'selectable-button' | 'selected-button' | 'permission-denied-button'

interface IStyledTimelineItem {
  isSelected: boolean
}

interface IStyledMobile {
  isMobile: boolean
}

export default TimelineItem
