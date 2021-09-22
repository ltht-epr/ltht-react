import { FC, HTMLAttributes } from 'react'
import { UserIcon } from '@ltht-react/icon'
import styled from '@emotion/styled'

import { AuditEvent, Maybe } from '@ltht-react/types'

const StyledTimelineItemLeft = styled.div`
  flex-grow: 1;
`

const PRIMARY_AUTHOR = 'PRIMAUTH'

const TimelineAuthor: FC<Props> = ({ audit }) => {
  if (!audit) return <></>

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

interface Props extends HTMLAttributes<HTMLDivElement> {
  audit: Maybe<AuditEvent>
}

export default TimelineAuthor
