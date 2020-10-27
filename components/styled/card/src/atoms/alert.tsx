import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

export interface Props {
  classes?: string
}

const StyledAlert = styled.div`
  padding: 0.75rem 1.25rem 0.75rem 0.75rem;
  background-color: yellow;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`

const Alert: React.FC<Props> = ({ classes, children }) => {
  return <StyledAlert className={classNames('card__alert', classes)}>{children}</StyledAlert>
}

export default Alert
