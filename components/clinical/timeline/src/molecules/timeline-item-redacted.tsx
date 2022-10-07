import { FC } from 'react'
import styled from '@emotion/styled'
import { HIGHLIGHT_GREEN, TRANSLUCENT_DARK_BLUE } from '@ltht-react/styles'
import { useWindowSize } from '@ltht-react/hooks'
import { isMobileView } from '@ltht-react/utils'
import TimelineTitleRedacted from '../atoms/timeline-title-redacted'

const StyledTimelineItem = styled.div<IStyledTimelineItem>`
  background-color: ${({ isSelected }) => (isSelected ? HIGHLIGHT_GREEN.VALUE : TRANSLUCENT_DARK_BLUE)};
  padding: 0.5rem;
`
const StyledTimelineItemTop = styled.div`
  display: flex;
  color: black;
  padding-bottom: 0.25rem;
`
const StyledTitle = styled.div<IStyledMobile>`
  flex-grow: 1;
  color: black;
  font-size: ${({ isMobile }) => (isMobile ? 'medium' : 'large')};
  font-weight: bold;
`

const TimelineItemRedacted: FC = () => {
  const { width } = useWindowSize()
  const isMobile = isMobileView(width)

  return (
    <StyledTimelineItem isSelected={false}>
      <StyledTimelineItemTop>
        <StyledTitle isMobile={isMobile}>
          <TimelineTitleRedacted />
        </StyledTitle>
      </StyledTimelineItemTop>
    </StyledTimelineItem>
  )
}

interface IStyledTimelineItem {
  isSelected: boolean
}

interface IStyledMobile {
  isMobile: boolean
}

export default TimelineItemRedacted
