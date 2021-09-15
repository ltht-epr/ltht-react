import { FC, HTMLAttributes } from 'react'

const TimelineDescription: FC<Props> = (props) => <>{props.description}</>

interface Props extends HTMLAttributes<HTMLDivElement> {
  description: string
}

export default TimelineDescription
