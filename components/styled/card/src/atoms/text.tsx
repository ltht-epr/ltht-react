import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

export interface Props {
  classes?: string
}

const StyledText = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const Text: React.FC<Props> = ({ classes, children }) => {
  return <StyledText className={classNames('card__text', classes)}>{children}</StyledText>
}

export default Text
