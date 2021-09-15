import { FC } from 'react'
import styled from '@emotion/styled'
import { AuditEventContinuation } from '@ltht-react/types'

import { CircleIcon } from '@ltht-react/icon'
import { TEXT_COLOURS, BANNER_COLOURS } from '@ltht-react/styles'
import { useWindowSize } from '@ltht-react/hooks'
import { isMobileView } from '@ltht-react/utils'

import TimelineTime from '../atoms/timeline-time'
import TimelineItem from '../molecules/timeline-item'

const StyledTimelineDayBody = styled.div<IStyledMobile>`
  background-color: white;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    height: 100%;
    left: ${({ isMobile }) => (isMobile ? '15%' : '50%')};
    border-left: 0.125rem solid ${TEXT_COLOURS.INFO};
    transform: ${({ isMobile }) => (isMobile ? 'translate(-15%)' : 'translate(-50%)')};
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
  margin: 1rem 0;
`

const StyledTimelineDayContent = styled.div<IStyledMobile>`
  width: ${({ isMobile }) => (isMobile ? '80%' : '49%')};
  padding: ${({ isMobile }) => (isMobile ? '0 0.5rem 0 0' : '0 0.5rem 0 0.5rem')};
  display: inline-block;
  vertical-align: top;
`

const StyledTimelineDayLine = styled.div<IStyledMobile>`
  width: ${({ isMobile }) => (isMobile ? '10%' : '2%')};
  vertical-align: top;
  margin-top: 0.125rem;
  display: inline-block;
  text-align: center;
  position: relative;
  height: 100%;
`

const StyledTimelineDayTimeLeft = styled.div<IStyledMobile>`
  width: ${({ isMobile }) => (isMobile ? '10%' : '49%')};
  display: inline-block;
  vertical-align: top;
  text-align: right;
  font-weight: bold;
`

const StyledTimelineDayTimeRight = styled.div<IStyledMobile>`
  width: ${({ isMobile }) => (isMobile ? '10%' : '49%')};
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
  const { width } = useWindowSize()

  const isMobile = isMobileView(width)

  const audit = props.auditItems

  if (isMobile) {
    return (
      <>
        <StyledTimelineDayHeader>{props.day}</StyledTimelineDayHeader>
        <StyledTimelineDayBody isMobile={isMobile}>
          {audit.resources.map((auditItem) => (
            <StyledTimelineDayItem isMobile={isMobile}>
              <StyledTimelineDayTimeLeft isMobile={isMobile}>
                <TimelineTime audit={auditItem} />
              </StyledTimelineDayTimeLeft>
              <StyledTimelineDayLine isMobile={isMobile}>
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
          ))}
        </StyledTimelineDayBody>
      </>
    )
  }

  return (
    <>
      <StyledTimelineDayHeader>{props.day}</StyledTimelineDayHeader>
      <StyledTimelineDayBody isMobile={isMobile}>
        {audit.resources.map((auditItem, idx) => {
          if (idx % 2 === 1) {
            return (
              <StyledTimelineDayItem isMobile={isMobile}>
                <StyledTimelineDayContent isMobile={isMobile}>
                  <TimelineItem audit={auditItem} />
                </StyledTimelineDayContent>
                <StyledTimelineDayLine isMobile={isMobile}>
                  <StyledOuterCircle>
                    <CircleIcon status="info" size="medium" />
                  </StyledOuterCircle>
                  <StyledInnerCircle>
                    <CircleIcon status="info" size="medium" />
                  </StyledInnerCircle>
                </StyledTimelineDayLine>
                <StyledTimelineDayTimeRight isMobile={isMobile}>
                  <TimelineTime audit={auditItem} />
                </StyledTimelineDayTimeRight>
              </StyledTimelineDayItem>
            )
          }
          return (
            <StyledTimelineDayItem isMobile={isMobile}>
              <StyledTimelineDayTimeLeft isMobile={isMobile}>
                <TimelineTime audit={auditItem} />
              </StyledTimelineDayTimeLeft>
              <StyledTimelineDayLine isMobile={isMobile}>
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
  auditItems: AuditEventContinuation
  day: string
}

interface IStyledMobile {
  isMobile: boolean
}

export default TimelineDay
