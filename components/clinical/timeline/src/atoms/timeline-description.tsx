import { FC, HTMLAttributes } from 'react'
import { Maybe } from '@ltht-react/types'

const TimelineDescription: FC<Props> = (props) => <>{props.outcomeDesc}</>

interface Props extends HTMLAttributes<HTMLDivElement> {
  outcomeDesc?: Maybe<string>
}

export default TimelineDescription
