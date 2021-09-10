import { FC } from 'react'
import styled from '@emotion/styled'

import { CircleIcon } from '@ltht-react/icon'
import { TEXT_COLOURS, BANNER_COLOURS } from '@ltht-react/styles'
import TimelineTime from '../atoms/timeline-time'
import TimelineItem from '../molecules/timeline-item'

const StyledTimelineDayBody = styled.div`
  background-color: white;
`

const StyledTimelineDayHeader = styled.div`
  background-color: ${BANNER_COLOURS.DEFAULT.BACKGROUND};
  padding: 0.5rem;
  margin: 0 -0.25rem;
  text-align: center;
  font-weight: bold;
`

const StyledTimelineDayItem = styled.div`
  display: inline-block;
  width: 100%;
  height: 6rem;
  justify-content: center;
  padding: 0 1rem;
  margin-top: 1rem;
`

const StyledTimelineDayContent = styled.div`
  width: 49%;
  display: inline-block;
  vertical-align: top;
`

const StyledTimelineDayLine = styled.div`
  width: 2%;
  display: inline-block;
  text-align: center;
  position: relative;
  height: 100%;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: -1rem;
    padding: 0.625rem 0;
    height: 100%;
    left: 50%;
    border-left: 0.125rem solid ${TEXT_COLOURS.INFO};
    transform: translate(-50%);
  }
`

const StyledTimelineDayTimeLeft = styled.div`
  width: 49%;
  display: inline-block;
  vertical-align: top;
  text-align: right;
  font-weight: bold;
`

const StyledTimelineDayTimeRight = styled.div`
  width: 49%;
  display: inline-block;
  vertical-align: top;
  text-align: left;
  font-weight: bold;
`

const StyledOuterCircle = styled.div`
  .icon__circle {
    position: absolute;
    z-index: 1;
    transform: translate(-50%);
    color: ${TEXT_COLOURS.INFO};
    font-size: 0.75rem;
  }
`

const StyledInnerCircle = styled.div`
  .icon__circle {
    position: absolute;
    z-index: 2;
    top: 0.125rem;
    transform: translate(-50%);
    color: white;
    font-size: 0.5rem;
  }
`

const TimelineDay: FC = () => (
  <>
    <StyledTimelineDayHeader>07 June 2021</StyledTimelineDayHeader>
    <StyledTimelineDayBody>
      <StyledTimelineDayItem>
        <StyledTimelineDayTimeLeft>
          <TimelineTime />
        </StyledTimelineDayTimeLeft>
        <StyledTimelineDayLine>
          <StyledOuterCircle>
            <CircleIcon status="info" size="medium" />
          </StyledOuterCircle>
          <StyledInnerCircle>
            <CircleIcon status="info" size="medium" />
          </StyledInnerCircle>
        </StyledTimelineDayLine>
        <StyledTimelineDayContent>
          <TimelineItem />
        </StyledTimelineDayContent>
      </StyledTimelineDayItem>

      <StyledTimelineDayItem>
        <StyledTimelineDayContent>
          <TimelineItem />
        </StyledTimelineDayContent>
        <StyledTimelineDayLine>
          <StyledOuterCircle>
            <CircleIcon status="info" size="medium" />
          </StyledOuterCircle>
          <StyledInnerCircle>
            <CircleIcon status="info" size="medium" />
          </StyledInnerCircle>
        </StyledTimelineDayLine>
        <StyledTimelineDayTimeRight>
          <TimelineTime />
        </StyledTimelineDayTimeRight>
      </StyledTimelineDayItem>

      <StyledTimelineDayItem>
        <StyledTimelineDayTimeLeft>
          <TimelineTime />
        </StyledTimelineDayTimeLeft>
        <StyledTimelineDayLine>
          <StyledOuterCircle>
            <CircleIcon status="info" size="medium" />
          </StyledOuterCircle>
          <StyledInnerCircle>
            <CircleIcon status="info" size="medium" />
          </StyledInnerCircle>
        </StyledTimelineDayLine>
        <StyledTimelineDayContent>
          <TimelineItem />
        </StyledTimelineDayContent>
      </StyledTimelineDayItem>

      <StyledTimelineDayItem>
        <StyledTimelineDayContent>
          <TimelineItem />
        </StyledTimelineDayContent>
        <StyledTimelineDayLine>
          <StyledOuterCircle>
            <CircleIcon status="info" size="medium" />
          </StyledOuterCircle>
          <StyledInnerCircle>
            <CircleIcon status="info" size="medium" />
          </StyledInnerCircle>
        </StyledTimelineDayLine>
        <StyledTimelineDayTimeRight>
          <TimelineTime />
        </StyledTimelineDayTimeRight>
      </StyledTimelineDayItem>
    </StyledTimelineDayBody>
  </>
)

export default TimelineDay
