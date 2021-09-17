import { FC } from 'react'
import styled from '@emotion/styled'
import { AuditEvent, Maybe } from '@ltht-react/types'
import { formatDateExplicitMonth } from '@ltht-react/utils'
import TimelineDay from './timeline-day'

const StyledTimeline = styled.div`
  margin: -0.75rem;
`

const Timeline: FC<IProps> = (props, ...rest) => {
  const audit = props.auditTrail

  const timelineDates: { [date: string]: Maybe<AuditEvent[]> } = {}

  audit?.forEach((auditItem) => {
    if (!auditItem?.period?.start?.value) {
      return
    }

    const date = formatDateExplicitMonth(new Date(auditItem?.period?.start?.value))

    const lookup = timelineDates[date]

    if (!lookup) {
      timelineDates[date] = [auditItem]
    } else {
      lookup.push(auditItem)
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
  auditTrail: Maybe<AuditEvent[]>
}

export default Timeline
