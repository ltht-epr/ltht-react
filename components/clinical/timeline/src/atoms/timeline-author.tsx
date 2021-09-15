import { FC, HTMLAttributes } from 'react'
import { UserIcon } from '@ltht-react/icon'
import styled from '@emotion/styled'

import { AuditEvent, Maybe } from '@ltht-react/types'

const StyledTimelineItemLeft = styled.div`
  flex-grow: 1;
`

const TimelineAuthor: FC<Props> = ({ audit }) => {
  if (!audit) return <></>

  // full list of roles
  const roles = audit.agent.map((agent) => agent?.role)

  // loop trough roles, find 1st where code is equal to PRIMAUTH and text
  let author = null
  for (let index = 0; index < roles.length; index++) {
    const element = roles[index]

    author = element?.find((el) => el?.coding?.find((c) => c?.code === 'PRIMAUTH'))

    if (!author) {
      break
    }
  }

  if (!author) {
    return <></>
  }

  return (
    <StyledTimelineItemLeft>
      <UserIcon size="medium" /> by {author.text}
    </StyledTimelineItemLeft>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  audit: Maybe<AuditEvent>
}

export default TimelineAuthor
