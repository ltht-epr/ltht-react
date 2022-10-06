import styled from '@emotion/styled'
import { ButtonBanner } from '@ltht-react/banner'
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
        <ButtonBanner type="warning" disabled>
          <StyledBannerContent>{buttonText ?? 'Insufficient privileges to view this item'}</StyledBannerContent>
        </ButtonBanner>
      )
    case 'selectable-button':
      return (
        <ButtonBanner type="info" onClick={clickHandler} showChevron={true}>
          {buttonText && <StyledBannerContent>{buttonText}</StyledBannerContent>}
        </ButtonBanner>
      )
    case 'selected-button':
      return (
        <ButtonBanner type="highlight" icon={<InfoCircleIcon status="info" size="medium" />} onClick={clickHandler}>
          {buttonText && <StyledBannerContent>{buttonText}</StyledBannerContent>}
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
