import { FC, HTMLAttributes } from 'react'
import { Maybe } from '@ltht-react/types'
import ReactHtmlParser from 'react-html-parser'

const TimelineDescription: FC<Props> = (props) => {
  if (!props.outcomeDesc) {
    return <></>
  }

  return <>{ReactHtmlParser(props.outcomeDesc)}</>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  outcomeDesc?: Maybe<string>
}

export default TimelineDescription
