import { FC, HTMLAttributes } from 'react'
import {
  AuditEvent,
  DocumentReference,
  Maybe,
  QuestionnaireResponse,
  TimelineDomainResourceType,
} from '@ltht-react/types'
import { TEXT_COLOURS } from '@ltht-react/styles'
import styled from '@emotion/styled'

const StyledRedactedMessage = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const TimelineTitle: FC<Props> = ({ domainResource, domainResourceType, isRedacted }) => {
  if (!domainResource) return <></>

  if (isRedacted) return <StyledRedactedMessage>Insufficient Privileges</StyledRedactedMessage>

  switch (domainResourceType) {
    case TimelineDomainResourceType.QuestionnaireResponse: {
      const qr = domainResource as QuestionnaireResponse
      const questionnaireTitle = qr.metadata.isRedacted
        ? 'Insufficient privileges'
        : qr.text?.text ?? qr.questionnaire?.title
      return <>{questionnaireTitle}</>
    }
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
  domainResource?: Maybe<AuditEvent | QuestionnaireResponse | DocumentReference>
  domainResourceType: TimelineDomainResourceType
  isRedacted: boolean
}

export default TimelineTitle
