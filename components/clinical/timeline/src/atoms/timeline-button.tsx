import styled from '@emotion/styled'
import { BannerTwo } from '@ltht-react/banner'
import { InfoCircleIcon } from '@ltht-react/icon'
import { FC, HTMLAttributes } from 'react'
import { ITimelineItem } from '../molecules/timeline-item'

const StyledBannerContent = styled.div``

const TimelineButton: FC<Props> = ({ timelineItem }) => {
  const { clickHandler, buttonState, buttonText } = timelineItem

  switch (buttonState) {
    case 'no-button':
      return <></>
    case 'permission-denied-button':
      return (
        <BannerTwo type="primary" buttonStyle="primary" disabled>
          <StyledBannerContent>{buttonText ?? 'Insufficient privileges to view this item'}</StyledBannerContent>
        </BannerTwo>
      )
    case 'selectable-button':
      return (
        <BannerTwo type="primary" buttonStyle="primary" onClick={clickHandler}>
          {buttonText && <StyledBannerContent>{buttonText}</StyledBannerContent>}
        </BannerTwo>
      )
    case 'selected-button':
      return (
        <BannerTwo
          type="primary"
          buttonStyle="primary"
          icon={<InfoCircleIcon status="info" size="medium" />}
          onClick={clickHandler}
        >
          {buttonText && <StyledBannerContent>{buttonText}</StyledBannerContent>}
        </BannerTwo>
      )
    default:
      throw new Error('ButtonState must be a valid value.')
  }
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  timelineItem: ITimelineItem
}

export default TimelineButton
