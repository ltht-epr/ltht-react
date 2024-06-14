import { FC, HTMLAttributes } from 'react'
import {
  AuditEvent,
  DocumentReference,
  Maybe,
  QuestionnaireResponse,
  TimelineDomainResourceType,
} from '@ltht-react/types'
import TimeElement, {Orientation} from "./time-element";



const TimelineTime: FC<Props> = ({
  domainResource,
  domainResourceType,
  orientation,
  pointInTimeClickHandler,
  ...rest
}) => {
  if (!domainResource) return <></>

  switch (domainResourceType) {
    case TimelineDomainResourceType.QuestionnaireResponse: {
      const qr = domainResource as QuestionnaireResponse
      if (!qr?.authored?.value) {
        return null
      }
      const date = new Date(qr?.authored.value)
      return <div {...rest}><TimeElement orientation={orientation} date={date} pointInTimeClicked={pointInTimeClickHandler} /></div>
    }
    case TimelineDomainResourceType.DocumentReference: {
      const docRef = domainResource as DocumentReference
      if (docRef && docRef?.created?.value) {
        const date = new Date(docRef.created.value)
        return <div {...rest}><TimeElement orientation={orientation} date={date} pointInTimeClicked={pointInTimeClickHandler} /></div>
      }
      return null
    }
    case TimelineDomainResourceType.AuditEvent: {
      const audit = domainResource as AuditEvent
      if (audit && audit?.recorded?.value) {
        const date = new Date(audit.recorded.value)
        return <div {...rest}><TimeElement orientation={orientation} date={date} pointInTimeClicked={pointInTimeClickHandler} /></div>
      }
      return null
    }
    default:
      return null
  }
}


interface Props extends HTMLAttributes<HTMLDivElement> {
  domainResource?: Maybe<AuditEvent | QuestionnaireResponse | DocumentReference>
  domainResourceType: TimelineDomainResourceType
  orientation?: Orientation
  pointInTimeClickHandler?: (date: Date) => void
}

export default TimelineTime
