import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'
import { ChevronIcon, InfoCircleIcon, ExclamationIcon } from '@ltht-react/icon'
import { BANNER_COLOURS } from '@ltht-react/styles'
import Text from './text'

type StatusTypes = 'default' | 'info' | 'danger' | 'warning'

interface StyledProps {
  status: StatusTypes
}

export interface Props {
  classes?: string
  status?: StatusTypes
}

const MatchColours = (status: StatusTypes): string => {
  switch (status) {
    case 'info':
      return `
        background: ${BANNER_COLOURS.INFO.BACKGROUND};
        color: ${BANNER_COLOURS.INFO.TEXT};
        border-top: 1px solid ${BANNER_COLOURS.INFO.BORDER};
        border-bottom: 1px solid ${BANNER_COLOURS.INFO.BORDER};
        & > .fa-info-circle {
          color: ${BANNER_COLOURS.INFO.ICON};
        }
      `
    case 'warning':
      return `
      background: ${BANNER_COLOURS.WARNING.BACKGROUND};
      color: ${BANNER_COLOURS.WARNING.TEXT};
      border-top: 1px solid ${BANNER_COLOURS.WARNING.BORDER};
      border-bottom: 1px solid ${BANNER_COLOURS.WARNING.BORDER};
      & > .fa-exclamation-triangle {
        color: ${BANNER_COLOURS.WARNING.ICON};
      }
      `
    case 'danger':
      return `
      background: ${BANNER_COLOURS.DANGER.BACKGROUND};
      color: ${BANNER_COLOURS.DANGER.TEXT};
      border-top: 1px solid ${BANNER_COLOURS.DANGER.BORDER};
      border-bottom: 1px solid ${BANNER_COLOURS.DANGER.BORDER};
      & > .fa-exclamation-triangle {
        color: ${BANNER_COLOURS.DANGER.ICON};
      }
      `
    case 'default':
    default:
      return ` 
      background: ${BANNER_COLOURS.DEFAULT.BACKGROUND};
      color: ${BANNER_COLOURS.DEFAULT.TEXT};
      border-top: 1px solid ${BANNER_COLOURS.DEFAULT.BORDER};
      border-bottom: 1px solid ${BANNER_COLOURS.DEFAULT.BORDER};
      & > .fa-info-circle {
        color: ${BANNER_COLOURS.DEFAULT.ICON};
      }
      `
  }
}

const StyledAlert = styled.div`
  display: flex;
  padding: 0.75rem;
  ${(props: StyledProps): string => MatchColours(props.status)}

  & > .card__text {
    flex: 1;
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
`

const Alert: React.FC<Props> = ({ status = 'default', classes, children }) => {
  return (
    <StyledAlert status={status} className={classNames(`card__alert_${status}`, classes)}>
      {status === 'default' && <InfoCircleIcon size="large" />}
      {status === 'info' && <InfoCircleIcon size="large" />}
      {status === 'warning' && <ExclamationIcon size="large" />}
      {status === 'danger' && <ExclamationIcon size="large" />}
      <Text>{children}</Text>
      <ChevronIcon size="large" direction="right" />
    </StyledAlert>
  )
}

export default Alert
