import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

const StyledText = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const Text: React.FC<Props> = ({ classes, children, ...rest }) => (
  <StyledText className={classNames('card__text', classes)} {...rest}>
    {children}
  </StyledText>
)

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  classes?: string
}

export default Text
