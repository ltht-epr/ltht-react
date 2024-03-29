import { FC, HTMLAttributes } from 'react'
import {
  AuditEvent,
  DocumentReference,
  Maybe,
  QuestionnaireResponse,
  TimelineDomainResourceType,
} from '@ltht-react/types'

const TimelineTitle: FC<Props> = ({ domainResource, domainResourceType, ...rest }) => {
  if (!domainResource) return <></>

  switch (domainResourceType) {
    case TimelineDomainResourceType.QuestionnaireResponse: {
      const qr = domainResource as QuestionnaireResponse
      const questionnaireTitle = qr.metadata.isRedacted
        ? 'Insufficient privileges'
        : qr.text?.text ?? qr.questionnaire?.title
      return <div {...rest}>{questionnaireTitle}</div>
    }
    case TimelineDomainResourceType.DocumentReference: {
      const docRef = domainResource as DocumentReference
      const docTitle = docRef.metadata.isRedacted ? 'Insufficient privileges' : docRef.text?.text
      return <div {...rest}>{docTitle}</div>
    }
    case TimelineDomainResourceType.AuditEvent: {
      const audit = domainResource as AuditEvent
      const auditTitle = audit.metadata.isRedacted ? 'Insufficient privileges' : audit.text?.text
      return <div {...rest}>{auditTitle}</div>
    }
    default:
      return <></>
  }
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  domainResource?: Maybe<AuditEvent | QuestionnaireResponse | DocumentReference>
  domainResourceType: TimelineDomainResourceType
}

export default TimelineTitle
