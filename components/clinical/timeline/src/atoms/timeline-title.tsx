import { FC, HTMLAttributes } from 'react'
import { AuditEvent, DocumentReference, Maybe } from '@ltht-react/types'
import isDocumentReference from '../methods'

const TimelineTitle: FC<Props> = ({ domainResource }) => {
  if (!domainResource) return <></>

  if (isDocumentReference(domainResource)) {
    const docRef = domainResource as DocumentReference
    const title = domainResource.metadata.isRedacted ? 'Insufficient privileges' : docRef.text?.text
    return <>{title}</>
  }
  const audit = domainResource as AuditEvent
  const title = domainResource.metadata.isRedacted ? 'Insufficient privileges' : audit.text?.text
  return <>{title}</>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  domainResource: Maybe<AuditEvent | DocumentReference>
}

export default TimelineTitle
