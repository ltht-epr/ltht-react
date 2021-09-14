import { FC } from 'react'
import styled from '@emotion/styled'
import { AuditEventContinuation } from '@ltht-react/types'

import TimelineDay from './timeline-day'
import { formatDate } from '@ltht-react/utils'

const StyledTimeline = styled.div`
  margin: -0.5rem;
`
// todo group days together
const Timeline: FC<IProps> = (props) => {
  const audit = props.auditTrail

  // group them by the day and find out what the day is - they should come in ordered cronologically

  // format the day

  var timelineDates = new AuditDict()
  audit.resources.map((auditItem) => {
    if (!auditItem?.period?.start?.value) {
      return <></>
    }

    // var dict = new Dictionary<string, Array<Audits>>
    var date = formatDate(new Date(auditItem?.period?.start?.value))

    //timelineDates.Days.push({ date, auditItem })

    return <></>
  })

  // pass in a collection of days? to TimelineDay?
  // loop trough the list of groupings and return the TimelineDay item

  // convert

  // array = Array.from(map, ([name, value]) => ({ name, value }));
  // let array = Array.from(timelineDates.keys())

  return (
    <>
      <StyledTimeline>
        {/* {array.map((key) => {
          console.log(key)
          return <TimelineDay auditItems={timelineDates.get(key)} day={key} />
        })} */}
      </StyledTimeline>
    </>
  )
}

interface IProps {
  auditTrail: AuditEventContinuation
}

interface Dictionary<T> {
  [Key: string]: T
}

export class AuditDict {
  Days: Dictionary<AuditEventContinuation> = {}
}

export default Timeline
