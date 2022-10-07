import { ButtonBanner } from '@ltht-react/banner'
import { InfoCircleIcon } from '@ltht-react/icon'
import { FC, HTMLAttributes } from 'react'
import { ITimelineItem } from '../molecules/timeline-item'

const TimelineButton: FC<Props> = ({ timelineItem }) => {
  const { clickHandler, buttonState, buttonText } = timelineItem

  switch (buttonState) {
    case 'no-button':
      return <></>
    case 'permission-denied-button':
      return (
        <ButtonBanner type="warning" disabled>
          {buttonText ?? 'Insufficient privileges to view this item'}
        </ButtonBanner>
      )
    case 'selectable-button':
      return (
        <ButtonBanner type="info" onClick={clickHandler}>
          {buttonText ?? ''}
        </ButtonBanner>
      )
    case 'selected-button':
      return (
        <ButtonBanner type="highlight" icon={<InfoCircleIcon status="info" size="medium" />} onClick={clickHandler}>
          {buttonText ?? ''}
        </ButtonBanner>
      )
    default:
      throw new Error('ButtonState must be a valid value.')
  }
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  timelineItem: ITimelineItem
}

export default TimelineButton
