import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

const StyledBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.75rem 0.75rem 0.75rem 0;
  margin: 0 0 0 0.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);

  &:first-child {
    border-top-width: 0;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
`

const Body: React.FC<Props> = ({ classes, children, ...rest }) => (
  <StyledBody className={classNames('card__body', classes)} {...rest}>
    {children}
  </StyledBody>
)

export interface Props extends HTMLAttributes<HTMLDivElement> {
  classes?: string
}

export default Body
