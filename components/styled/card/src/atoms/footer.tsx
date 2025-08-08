import { HTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

const StyledFooter = styled.div`
  padding: 0.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`

const Footer = forwardRef<HTMLDivElement, Props>(({ classes, children, ...rest }, ref) => (
  <StyledFooter ref={ref} className={classNames('card__footer', classes)} {...rest}>
    {children}
  </StyledFooter>
))

export interface Props extends HTMLAttributes<HTMLDivElement> {
  classes?: string
}

export default Footer
