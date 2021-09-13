import { FC, HTMLAttributes } from 'react'
import { AuditEvent, Maybe } from '@ltht-react/types'
import { formatTime } from '@ltht-react/utils'

const TimelineTime: FC<Props> = ({ audit }) => {
  if (!audit?.period?.start?.value) {
    return <></>
  }

  const time = formatTime(new Date(audit.period.start.value))
  return <>{time}</>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  audit: Maybe<AuditEvent>
}

export default TimelineTime
