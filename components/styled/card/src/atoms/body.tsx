import { HTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

const StyledBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.75rem;
  margin: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`

const Body = forwardRef<HTMLDivElement, Props>(({ classes, children, ...rest }, ref) => (
  <StyledBody ref={ref} className={classNames('card__body', classes)} {...rest}>
    {children}
  </StyledBody>
))

export interface Props extends HTMLAttributes<HTMLDivElement> {
  classes?: string
}

export default Body
