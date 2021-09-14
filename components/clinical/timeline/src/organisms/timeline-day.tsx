import { FC } from 'react'
import styled from '@emotion/styled'
import { AuditEventContinuation } from '@ltht-react/types'

import { CircleIcon } from '@ltht-react/icon'
import { TEXT_COLOURS, BANNER_COLOURS } from '@ltht-react/styles'
import TimelineTime from '../atoms/timeline-time'
import TimelineItem from '../molecules/timeline-item'

const StyledTimelineDayBody = styled.div`
  background-color: white;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    height: 100%;
    left: 50%;
    border-left: 0.125rem solid ${TEXT_COLOURS.INFO};
    transform: translate(-50%);
  }
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
  justify-content: center;
  padding: 0 1rem;
  margin: 1rem 0;
`

const StyledTimelineDayContent = styled.div`
  width: 49%;
  display: inline-block;
  vertical-align: top;
`

const StyledTimelineDayLine = styled.div`
  width: 2%;
  vertical-align: top;
  margin-top: 0.125rem;
  display: inline-block;
  text-align: center;
  position: relative;
  height: 100%;
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

const TimelineDay: FC<IProps> = (props) => {
  const audit = props.auditItems

  return (
    <>
      <StyledTimelineDayHeader>{props.day}</StyledTimelineDayHeader>
      <StyledTimelineDayBody>
        {audit.resources.map((auditItem, idx) => {
          if (idx % 2 === 1) {
            return (
              <StyledTimelineDayItem>
                <StyledTimelineDayContent>
                  <TimelineItem audit={auditItem} />
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
                  <TimelineTime audit={auditItem} />
                </StyledTimelineDayTimeRight>
              </StyledTimelineDayItem>
            )
          }
          return (
            <StyledTimelineDayItem>
              <StyledTimelineDayTimeLeft>
                <TimelineTime audit={auditItem} />
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
                <TimelineItem audit={auditItem} />
              </StyledTimelineDayContent>
            </StyledTimelineDayItem>
          )
        })}
      </StyledTimelineDayBody>
    </>
  )
}

interface IProps {
  auditItems: AuditEventContinuation
  day: string
}

export default TimelineDay
