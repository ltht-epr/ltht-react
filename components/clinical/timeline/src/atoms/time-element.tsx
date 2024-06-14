import {FC} from "react";
import Icon from "@ltht-react/icon";
import styled from "@emotion/styled";
import {formatDateTime, formatTime} from "@ltht-react/utils";
import {Button} from "@ltht-react/button";

const StyledButton = styled(Button)`
  width: auto;
`

const StyledTimelineTime = styled.div<OrientationProps>`
  margin-top: -0.65rem;
  display: flex;
  
  ${(props) => props.orientation === 'left' ? `justify-content: right` : `justify-content: left`}
`

const TimeElement: FC<Props> = ({date, orientation, pointInTimeClicked, ...rest }) => {
  const time = formatTime(date)
  
  if (!orientation || !pointInTimeClicked) {
    return <>{time}</>
  }
  
  const buttonTitle = "Show the dashboard as it was at " + formatDateTime(date)

  return (
    <StyledTimelineTime orientation={orientation} {...rest}>
      <StyledButton title={buttonTitle} styling={{buttonStyle: "clear"}}
                    iconColour={"black"} icon={<Icon type={"clock-rotate-left"} size={"medium"} color={"link-blue"}/>}
                    onClick={() => pointInTimeClicked(date)} value={time}/>
    </StyledTimelineTime>)
}

export type Orientation = 'left' | 'right'

interface OrientationProps {
  orientation?: Orientation
}

interface Props extends OrientationProps {
  date: Date
  pointInTimeClicked?: (date: Date) => void
}

export default TimeElement