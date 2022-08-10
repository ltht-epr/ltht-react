import { FC, HTMLAttributes } from 'react'
import { UserIcon } from '@ltht-react/icon'
import styled from '@emotion/styled'

import { AuditEvent, DocumentReference, Maybe, TimelineDomainResourceType } from '@ltht-react/types'
import { PRIMARY_AUTHOR } from '../constants'

const StyledTimelineItemLeft = styled.div`
  flex-grow: 1;
`

const TimelineAuthor: FC<Props> = ({ domainResource, domainResourceType }) => {
  if (!domainResource) return <></>

  switch (domainResourceType) {
    case TimelineDomainResourceType.DocumentReference: {
      const docRef = domainResource as DocumentReference
      let authorList: string[] = []

      if (docRef?.author == null) {
        return <></>
      }

      docRef.author.forEach((auth) => {
        if (auth) {
          authorList.push(auth.specialty ? `${auth.fullName} (${auth.specialty})` : `${auth.fullName}`)
        }
      })

      if (authorList.length === 0) {
        return <></>
      }

      return (
        <StyledTimelineItemLeft>
          <UserIcon size="medium" /> by {authorList.join(', ')}
        </StyledTimelineItemLeft>
      )
    }
    case TimelineDomainResourceType.AuditEvent: {
      const audit = domainResource as AuditEvent
      let authorName = ''

      audit.agent.forEach((agent) => {
        agent?.role?.forEach((role) => {
          const isPrimaryAuthor = !!role?.coding?.find((x) => x?.code === PRIMARY_AUTHOR)
          !authorName && isPrimaryAuthor && (authorName = agent.who?.display || '')
        })
      })

      if (!authorName) {
        return <></>
      }

      return (
        <StyledTimelineItemLeft>
          <UserIcon size="medium" /> by {authorName}
        </StyledTimelineItemLeft>
      )
    }
  }

  return <></>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  domainResource: Maybe<AuditEvent | DocumentReference>
  domainResourceType: TimelineDomainResourceType
}

export default TimelineAuthor
