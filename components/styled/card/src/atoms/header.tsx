import { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

const StyledHeader = styled.div`
  padding: 0.75rem;
`

const Header = forwardRef<HTMLDivElement, Props>(({ classes, children, ...rest }, ref) => (
  <StyledHeader ref={ref} className={classNames('card__header', classes)} {...rest}>
    {children}
  </StyledHeader>
))

export interface Props extends HTMLAttributes<HTMLDivElement> {
  classes?: string
}

export default Header
