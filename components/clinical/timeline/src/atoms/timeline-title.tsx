import { FC, HTMLAttributes } from 'react'
import { AuditEvent, Maybe } from '@ltht-react/types'

const TimelineTitle: FC<Props> = ({ audit }) => {
  if (!audit) return <></>

  const title = audit.text?.text
  return <>{title}</>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  audit: Maybe<AuditEvent>
}

export default TimelineTitle
