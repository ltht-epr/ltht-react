import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

export interface Props {
  classes?: string
}

const StyledSubtitle = styled.h5`
  font-size: 0.9rem;
  font-weight: 500;
`

const Subtitle: React.FC<Props> = ({ classes, children }) => {
  return <StyledSubtitle className={classNames('card__Subtitle', classes)}>{children}</StyledSubtitle>
}

export default Subtitle
