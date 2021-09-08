import { FC } from 'react'

// import { AllergyIntolerance } from '@ltht-react/types'
import TimelineDescription from '../atoms/timeline-description'
import TimelineAuthor from '../atoms/timeline-author'
import TimelineStatus from '../atoms/timeline-status'
import TimelineTitle from '../atoms/timeline-title'

const TimelineItem: FC = () => (
  <>
    <TimelineTitle />
    <TimelineDescription />
    <TimelineAuthor />
    <TimelineStatus />
  </>
)

export default TimelineItem
