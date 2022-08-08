import { FC, HTMLAttributes } from 'react'
import { AuditEvent, DocumentReference, Maybe, TimelineDomainResourceType } from '@ltht-react/types'

const TimelineTitle: FC<Props> = ({ domainResource, domainResourceType }) => {
  if (!domainResource) return <></>

  switch (domainResourceType) {
    case TimelineDomainResourceType.DocumentReference: {
      const docRef = domainResource as DocumentReference
      const docTitle = docRef.metadata.isRedacted ? 'Insufficient privileges' : docRef.text?.text
      return <>{docTitle}</>
    }
    case TimelineDomainResourceType.AuditEvent: {
      const audit = domainResource as AuditEvent
      const auditTitle = audit.metadata.isRedacted ? 'Insufficient privileges' : audit.text?.text
      return <>{auditTitle}</>
    }
  }

  return <></>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  domainResource: Maybe<AuditEvent | DocumentReference>
  domainResourceType: TimelineDomainResourceType
}

export default TimelineTitle
