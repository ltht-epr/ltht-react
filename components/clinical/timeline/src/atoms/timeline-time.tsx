import { FC, HTMLAttributes } from 'react'
import {
  AuditEvent,
  DocumentReference,
  Maybe,
  QuestionnaireResponse,
  TimelineDomainResourceType,
} from '@ltht-react/types'
import { formatTime } from '@ltht-react/utils'

const TimelineTime: FC<Props> = ({ domainResource, domainResourceType, ...rest }) => {
  if (!domainResource) return <></>

  switch (domainResourceType) {
    case TimelineDomainResourceType.QuestionnaireResponse: {
      const qr = domainResource as QuestionnaireResponse
      if (!qr?.authored?.value) {
        return <></>
      }
      const time = formatTime(new Date(qr?.authored.value))
      return <div {...rest}>{time}</div>
    }
    case TimelineDomainResourceType.DocumentReference: {
      const docRef = domainResource as DocumentReference
      if (docRef && docRef?.created?.value) {
        const time = formatTime(new Date(docRef.created.value))
        return <div {...rest}>{time}</div>
      }
      return <></>
    }
    case TimelineDomainResourceType.AuditEvent: {
      const audit = domainResource as AuditEvent
      if (audit && audit?.recorded?.value) {
        const time = formatTime(new Date(audit.recorded.value))
        return <div {...rest}>{time}</div>
      }
      return <></>
    }
    default:
      return <></>
  }
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  domainResource?: Maybe<AuditEvent | QuestionnaireResponse | DocumentReference>
  domainResourceType: TimelineDomainResourceType
}

export default TimelineTime
