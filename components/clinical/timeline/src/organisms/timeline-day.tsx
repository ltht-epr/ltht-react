import { FC } from 'react'
import TimelineTime from '../atoms/timeline-time'
import TimelineItem from '../molecules/timeline-item'

// import { AllergyIntolerance } from '@ltht-react/types'

const TimelineDay: FC = () => (
  <>
    <TimelineTime />
    <TimelineItem />

    <TimelineTime />
    <TimelineItem />

    <TimelineTime />
    <TimelineItem />
  </>
)

export default TimelineDay
