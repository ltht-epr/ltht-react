import { FC, HTMLAttributes } from 'react'
import { AuditEvent, DocumentReference, Maybe, TimelineDomainResourceType } from '@ltht-react/types'
import ReactHtmlParser from 'react-html-parser'
import styled from '@emotion/styled'

const StyledDescription = styled.div`
  p {
    margin: 0 0.2rem;
    display: inline;
  }
`

const TimelineDescription: FC<Props> = ({ domainResource, domainResourceType }) => {
  if (!domainResource) return <></>

  switch (domainResourceType) {
    case TimelineDomainResourceType.DocumentReference: {
      const docRef = domainResource as DocumentReference
      return docRef.description ? <>{docRef.description}</> : <></>
    }
    case TimelineDomainResourceType.AuditEvent: {
      const audit = domainResource as AuditEvent
      if (!audit.outcomeDesc) {
        return <></>
      }

      return <StyledDescription>{ReactHtmlParser(audit.outcomeDesc)}</StyledDescription>
    }
  }

  return <></>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  domainResource: Maybe<AuditEvent | DocumentReference>
  domainResourceType: TimelineDomainResourceType
}

export default TimelineDescription
