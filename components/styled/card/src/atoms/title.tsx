import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

export interface Props {
  classes?: string
}

const StyledTitle = styled.h3``

const Title: React.FC<Props> = ({ classes, children }) => {
  return <StyledTitle className={classNames('card__title', classes)}>{children}</StyledTitle>
}

export default Title
