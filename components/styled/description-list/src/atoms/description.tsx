import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'

const StyledDescription = styled.dd`
  color: ${TEXT_COLOURS.SECONDARY};
  margin-left: 0;
`

const Description: React.FC<Props> = ({ children, classes, ...rest }) => {
  return (
    <StyledDescription className={classNames('description-list__description', classes)} {...rest}>
      {children}
    </StyledDescription>
  )
}

export interface Props extends HTMLAttributes<HTMLElement> {
  classes?: string
}

export default Description
