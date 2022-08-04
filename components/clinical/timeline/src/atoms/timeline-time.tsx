import { FC, HTMLAttributes } from 'react'
import { AuditEvent, DocumentReference, Maybe } from '@ltht-react/types'
import { formatTime } from '@ltht-react/utils'
import isDocumentReference from '../methods'

const TimelineTime: FC<Props> = ({ domainResource }) => {
  if (!domainResource) return <></>

  if (isDocumentReference(domainResource)) {
    const docRef = domainResource as DocumentReference
    if (docRef && docRef?.created?.value) {
      const time = formatTime(new Date(docRef.created.value))
      return <>{time}</>
    }
  } else {
    const audit = domainResource as AuditEvent
    if (audit && audit?.period?.start?.value) {
      const time = formatTime(new Date(audit.period.start.value))
      return <>{time}</>
    }
  }
  return <></>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  domainResource: Maybe<AuditEvent | DocumentReference>
}

export default TimelineTime
