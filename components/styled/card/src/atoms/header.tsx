/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

const StyledHeader = styled.div`
  padding: 0.75rem 0.75rem 0.75rem 0;
  margin: 0 0 0 0.75rem;
`

const Header: React.FC<Props> = ({ classes, children, ...rest }) => {
  return (
    <StyledHeader className={classNames('card__header', classes)} {...rest}>
      {children}
    </StyledHeader>
  )
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  classes?: string
}

export default Header
