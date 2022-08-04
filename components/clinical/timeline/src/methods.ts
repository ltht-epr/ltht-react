import { AuditEvent, DocumentReference } from '@ltht-react/types'

const isDocumentReference = (domainResource: AuditEvent | DocumentReference): boolean => {
  const docRef = domainResource as DocumentReference
  return docRef.status !== undefined
}

export default isDocumentReference
