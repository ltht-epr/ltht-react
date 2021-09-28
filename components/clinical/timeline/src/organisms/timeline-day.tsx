import { FC } from 'react'
import styled from '@emotion/styled'
import { AuditEvent, Maybe } from '@ltht-react/types'

import { CircleIcon } from '@ltht-react/icon'
import { TEXT_COLOURS, BANNER_COLOURS } from '@ltht-react/styles'
import { useWindowSize } from '@ltht-react/hooks'
import { formatTime, isMobileView } from '@ltht-react/utils'

import TimelineTime from '../atoms/timeline-time'
import TimelineItem from '../molecules/timeline-item'

const StyledTimelineDayBody = styled.div<IStyledMobile>`
  background-color: white;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    height: ${({ isMobile }) => (isMobile ? '0%' : '100%')};
    left: calc(50% - 1px);
    border-width: 0 0 0 2px;
    border-color: ${TEXT_COLOURS.INFO};
    border-style: solid;
  }
`

const StyledTimelineDayHeader = styled.div`
  background-color: ${BANNER_COLOURS.DEFAULT.BACKGROUND};
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
`

const StyledTimelineDayItem = styled.div<IStyledMobile>`
  display: inline-block;
  width: 100%;
  justify-content: center;
  padding: ${({ isMobile }) => (isMobile ? '' : '0 0.5rem')};
  margin: ${({ isMobile }) => (isMobile ? '0.5rem 0' : '1rem 0')};
`

const StyledTimelineDayContent = styled.div<IStyledMobile>`
  width: ${({ isMobile }) => (isMobile ? '100%' : '49%')};
  padding: 0 0.5rem;
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
  padding: 0 0.5rem;
  display: inline-block;
  vertical-align: top;
  text-align: right;
  font-weight: bold;
`

const StyledTimelineDayTimeRight = styled.div`
  width: 49%;
  padding: 0 0.5rem;
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
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    left: 50%;
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
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    left: 50%;
    color: white;
    font-size: 0.5rem;
  }
`

const TimelineDay: FC<IProps> = (props) => {
  const { width } = useWindowSize()
  const isMobile = isMobileView(width)
  const audit = props.auditItems

  if (isMobile) {
    return (
      <>
        <StyledTimelineDayHeader>{props.day}</StyledTimelineDayHeader>
        <StyledTimelineDayBody isMobile={isMobile}>
          {audit?.map((auditItem) => (
            <StyledTimelineDayItem isMobile={isMobile}>
              <StyledTimelineDayContent isMobile={isMobile}>
                <TimelineItem audit={auditItem} />
              </StyledTimelineDayContent>
            </StyledTimelineDayItem>
          ))}
        </StyledTimelineDayBody>
      </>
    )
  }

  let position = 0

  return (
    <>
      <StyledTimelineDayHeader>{props.day}</StyledTimelineDayHeader>
      <StyledTimelineDayBody isMobile={isMobile}>
        {audit?.map((auditItem, idx) => {
          if (!auditItem?.period?.start?.value) {
            return <></>
          }
          const currentTime = formatTime(new Date(auditItem?.period?.start?.value))
          let previousTime = currentTime

          if (idx > 0) {
            const previousItem = audit[idx - 1]
            if (!previousItem?.period?.start?.value) {
              return <></>
            }
            previousTime = formatTime(new Date(previousItem?.period?.start?.value))
          }

          if (currentTime !== previousTime) {
            position += 1
          }

          if (position % 2 === 1) {
            return (
              <StyledTimelineDayItem isMobile={isMobile}>
                <StyledTimelineDayContent isMobile={isMobile}>
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
            <StyledTimelineDayItem isMobile={isMobile}>
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
              <StyledTimelineDayContent isMobile={isMobile}>
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
  auditItems: Maybe<AuditEvent>[]
  day: string
}

interface IStyledMobile {
  isMobile: boolean
}

export default TimelineDay
