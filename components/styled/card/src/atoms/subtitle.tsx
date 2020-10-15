/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

const StyledSubtitle = styled.h5`
  font-size: 0.9rem;
  font-weight: 500;
`

const Subtitle: React.FC<Props> = ({ classes, children, ...rest }) => {
  return (
    <StyledSubtitle className={classNames('card__Subtitle', classes)} {...rest}>
      {children}
    </StyledSubtitle>
  )
}

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
  classes?: string
}

export default Subtitle
