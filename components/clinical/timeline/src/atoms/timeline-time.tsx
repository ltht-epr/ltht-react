import { FC, HTMLAttributes } from 'react'
import { AuditEvent, DocumentReference, Maybe, TimelineDomainResourceType } from '@ltht-react/types'
import { formatTime } from '@ltht-react/utils'

const TimelineTime: FC<Props> = ({ domainResource, domainResourceType }) => {
  if (!domainResource) return <></>

  switch (domainResourceType) {
    case TimelineDomainResourceType.DocumentReference: {
      const docRef = domainResource as DocumentReference
      if (docRef && docRef?.created?.value) {
        const time = formatTime(new Date(docRef.created.value))
        return <>{time}</>
      }
      return <></>
    }
    case TimelineDomainResourceType.AuditEvent: {
      const audit = domainResource as AuditEvent
      if (audit && audit?.period?.start?.value) {
        const time = formatTime(new Date(audit.period.start.value))
        return <>{time}</>
      }
      return <></>
    }
  }
  return <></>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  domainResource: Maybe<AuditEvent | DocumentReference>
  domainResourceType: TimelineDomainResourceType
}

export default TimelineTime
