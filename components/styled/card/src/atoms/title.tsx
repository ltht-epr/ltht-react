import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

const StyledTitle = styled.h3`
  margin: 0;
`

const Title: React.FC<Props> = ({ classes, children, ...rest }) => (
  <StyledTitle className={classNames('card__title', classes)} {...rest}>
    {children}
  </StyledTitle>
)

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
  classes?: string
}

export default Title
