import { FC, HTMLAttributes } from 'react'
import { Maybe } from '@ltht-react/types'
import ReactHtmlParser from 'react-html-parser'
import styled from '@emotion/styled'

const StyledDescription = styled.div`
  p {
    margin: 0 0.2rem;
    display: inline;
  }
`

const TimelineDescription: FC<Props> = (props) => {
  if (!props.outcomeDesc) {
    return <></>
  }

  return <StyledDescription>{ReactHtmlParser(props.outcomeDesc)}</StyledDescription>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  outcomeDesc?: Maybe<string>
}

export default TimelineDescription
