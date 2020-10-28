import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'
import { ChevronIcon, InfoCircleIcon, ExclamationIcon } from '@ltht-react/icon'
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
        background: #cbdbee;
        color: #0053c3;
        & > .fa-info-circle {
          color: #107dbd;
        }
      `
    case 'warning':
      return `
      background: #fef3cd;
      color: #926100;
      & > .fa-exclamation-triangle {
        color: #ffa500;
      }
      `
    case 'danger':
      return `
      background: #eeacbd;
      color: #a41e40;
      & > .fa-exclamation-triangle {
        color: #f50b47;
      }
      `
    case 'default':
    default:
      return ` 
      background: #edecec;
      color: #626262;
      & > .fa-info-circle {
        color: #919090;
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
