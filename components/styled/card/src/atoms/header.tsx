import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

export interface Props {
  classes?: string
}

const StyledHeader = styled.div`
  padding: 0.75rem 1.25rem 0.75rem 0;
  margin: 0 0 0 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`

const Header: React.FC<Props> = ({ classes, children }) => {
  return <StyledHeader className={classNames('card__header', classes)}>{children}</StyledHeader>
}

export default Header
