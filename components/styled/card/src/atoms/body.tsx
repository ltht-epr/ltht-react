import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

export interface Props {
  classes?: string
}

const StyledBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.75rem 1.25rem;
`

const Body: React.FC<Props> = ({ classes, children }) => {
  return <StyledBody className={classNames('card__body', classes)}>{children}</StyledBody>
}

export default Body
