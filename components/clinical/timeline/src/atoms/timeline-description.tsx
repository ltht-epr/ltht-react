import { FC, HTMLAttributes } from 'react'
import { AuditEvent, DocumentReference, Maybe } from '@ltht-react/types'
import ReactHtmlParser from 'react-html-parser'
import styled from '@emotion/styled'
import isDocumentReference from '../methods'

const StyledDescription = styled.div`
  p {
    margin: 0 0.2rem;
    display: inline;
  }
`

const TimelineDescription: FC<Props> = ({ domainResource }) => {
  if (!domainResource) return <></>
  if (isDocumentReference(domainResource)) {
    return <></>
  }
  const audit = domainResource as AuditEvent
  if (!audit.outcomeDesc) {
    return <></>
  }

  return <StyledDescription>{ReactHtmlParser(audit.outcomeDesc)}</StyledDescription>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  domainResource: Maybe<AuditEvent | DocumentReference>
}

export default TimelineDescription
