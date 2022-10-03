import styled from '@emotion/styled'
import Banner from '@ltht-react/banner'
import { InfoCircleIcon } from '@ltht-react/icon'
import { FC, HTMLAttributes } from 'react'
import { ITimelineItem } from '../molecules/timeline-item'

const StyledBanner = styled(Banner)`
  margin: -0.5rem;
  margin-top: 0.5rem;
`

const StyledBannerContent = styled.div``

const TimelineButton: FC<Props> = ({ timelineItem }) => {
  const {
    clickHandler,
    clickPrompt,
    isSelected,
    deselectPrompt,
    clickPermissionDenied,
    clickPermissionDeniedMessage,
  } = timelineItem

  if (!clickHandler) {
    return <></>
  }

  if (clickPermissionDenied) {
    return (
      <StyledBanner type="warning">
        <StyledBannerContent>{clickPermissionDeniedMessage ?? 'Insufficient privileges to view this item'}</StyledBannerContent>
      </StyledBanner>
    )
  }

  return (
    <>
      {!isSelected && (
        <StyledBanner type="info" onClick={clickHandler}>
          {clickPrompt && <StyledBannerContent>{clickPrompt}</StyledBannerContent>}
        </StyledBanner>
      )}
      {isSelected && (
        <StyledBanner
          type="highlight"
          icon={<InfoCircleIcon status="info" size="medium" />}
          onClick={clickHandler}
        >
          {deselectPrompt && <StyledBannerContent>{deselectPrompt}</StyledBannerContent>}
        </StyledBanner>
      )}
    </>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  timelineItem: ITimelineItem
}

export default TimelineButton
