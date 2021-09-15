import { FC } from 'react'
import styled from '@emotion/styled'
import { AuditEventContinuation } from '@ltht-react/types'
import { formatDate } from '@ltht-react/utils'
import TimelineDay from './timeline-day'

const StyledTimeline = styled.div`
  margin: -0.5rem;
`
// todo group days together
const Timeline: FC<IProps> = (props, ...rest) => {
  const audit = props.auditTrail

  const timelineDates: { [date: string]: AuditEventContinuation } = {}

  audit.resources.forEach((auditItem) => {
    if (!auditItem?.period?.start?.value) {
      return
    }

    const date = formatDate(new Date(auditItem?.period?.start?.value))

    const lookup = timelineDates[date]

    if (!lookup) {
      timelineDates[date] = {
        resources: [auditItem],
        selfCursorToken: '',
      }
    } else {
      lookup.resources.push(auditItem)
      timelineDates[date] = lookup
    }
  })

  return (
    <>
      <StyledTimeline {...rest}>
        {Object.entries(timelineDates).map(([key, value]) => (
          <TimelineDay day={key} auditItems={value} />
        ))}
      </StyledTimeline>
    </>
  )
}

interface IProps {
  auditTrail: AuditEventContinuation
}

export default Timeline
