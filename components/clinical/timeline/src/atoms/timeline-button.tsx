import { ButtonBanner } from '@ltht-react/banner'
import { Icon } from '@ltht-react/icon'
import { FC, HTMLAttributes } from 'react'
import { ITimelineItem } from '../molecules/timeline-item'

const TimelineButton: FC<Props> = ({ timelineItem, className }) => {
  const { clickHandler, buttonState, buttonText } = timelineItem

  switch (buttonState) {
    case 'no-button':
      return <></>
    case 'permission-denied-button':
      return (
        <ButtonBanner className={className} type="warning" disabled>
          {buttonText ?? 'Insufficient privileges to view this item'}
        </ButtonBanner>
      )
    case 'selectable-button':
      return (
        <ButtonBanner className={className} type="info" onClick={clickHandler}>
          {buttonText ?? ''}
        </ButtonBanner>
      )
    case 'selected-button':
      return (
        <ButtonBanner
          className={className}
          type="highlight"
          icon={<Icon type="info-circle" status="info" size="medium" />}
          onClick={clickHandler}
        >
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
