import { FC, HTMLAttributes } from 'react'
import {
  AuditEvent,
  DocumentReference,
  Maybe,
  QuestionnaireResponse,
  TimelineDomainResourceType,
} from '@ltht-react/types'
import ReactHtmlParser from 'react-html-parser'
import styled from '@emotion/styled'

const StyledDescription = styled.div`
  p {
    margin: 0 0.2rem;
    display: inline;
  }
`

const TimelineDescription: FC<Props> = ({ domainResource, domainResourceType, ...rest }) => {
  if (!domainResource) return <></>

  switch (domainResourceType) {
    case TimelineDomainResourceType.QuestionnaireResponse: {
      const qr = domainResource as QuestionnaireResponse
      if (!qr.questionnaire?.description) {
        return <></>
      }
      return <StyledDescription {...rest}>{ReactHtmlParser(qr.questionnaire?.description)}</StyledDescription>
    }
    case TimelineDomainResourceType.DocumentReference: {
      const docRef = domainResource as DocumentReference
      return docRef.description ? <>{docRef.description}</> : <></>
    }
    case TimelineDomainResourceType.AuditEvent: {
      const audit = domainResource as AuditEvent
      if (!audit.outcomeDesc) {
        return <></>
      }

      return <StyledDescription {...rest}>{ReactHtmlParser(audit.outcomeDesc)}</StyledDescription>
    }
    default:
      return <></>
  }
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  domainResource?: Maybe<AuditEvent | QuestionnaireResponse | DocumentReference>
  domainResourceType: TimelineDomainResourceType
}

export default TimelineDescription
