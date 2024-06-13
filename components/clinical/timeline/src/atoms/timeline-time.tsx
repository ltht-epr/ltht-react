import { FC, HTMLAttributes } from 'react'
import {
  AuditEvent,
  DocumentReference,
  Maybe,
  QuestionnaireResponse,
  TimelineDomainResourceType,
} from '@ltht-react/types'
import { formatTime } from '@ltht-react/utils'
import Icon from "@ltht-react/icon";
import styled from "@emotion/styled";

const StyledLeftTimeIcon = styled(Icon)`
  cursor: pointer;
  display: inline-block;
  padding-right: 0.25rem;
`

const StyledRightTimeIcon = styled(Icon)`
  cursor: pointer;
  display: inline-block;
  padding-left: 0.35rem;
`

const TimelineTime: FC<Props> = ({ domainResource, domainResourceType, orientation, pointInTimeClickHandler, ...rest }) => {
  if (!domainResource) return <></>
  
  const showPointInTime = orientation && pointInTimeClickHandler
  const getTimeElement = (time: string) => { 
    return (
      <div {...rest}>
        {showPointInTime && orientation === 'left' && <StyledLeftTimeIcon type={"clock-rotate-left"} size={"medium"} />}
        {time}
        {showPointInTime && orientation === 'right' && <StyledRightTimeIcon type={"clock-rotate-left"} size={"medium"} clickHandler={pointInTimeClickHandler} />}
      </div>)
  }

  switch (domainResourceType) {
    case TimelineDomainResourceType.QuestionnaireResponse: {
      const qr = domainResource as QuestionnaireResponse
      if (!qr?.authored?.value) {
        return <></>
      }
      const time = formatTime(new Date(qr?.authored.value))
      return getTimeElement(time)
    }
    case TimelineDomainResourceType.DocumentReference: {
      const docRef = domainResource as DocumentReference
      if (docRef && docRef?.created?.value) {
        const time = formatTime(new Date(docRef.created.value))
        return getTimeElement(time)
      }
      return <></>
    }
    case TimelineDomainResourceType.AuditEvent: {
      const audit = domainResource as AuditEvent
      if (audit && audit?.recorded?.value) {
        const time = formatTime(new Date(audit.recorded.value))
        return getTimeElement(time)
      }
      return <></>
    }
    default:
      return <></>
  }
}

export type Orientation = 'left' | 'right'

interface Props extends HTMLAttributes<HTMLDivElement> {
  domainResource?: Maybe<AuditEvent | QuestionnaireResponse | DocumentReference>
  domainResourceType: TimelineDomainResourceType
  orientation?: Orientation
  pointInTimeClickHandler?: () => void
}

export default TimelineTime
