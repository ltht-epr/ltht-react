import { HTMLAttributes, FC } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

const StyledFooter = styled.div`
  padding: 0.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`

const Footer: FC<Props> = ({ classes, children, ...rest }) => (
  <StyledFooter className={classNames('card__footer', classes)} {...rest}>
    {children}
  </StyledFooter>
)

export interface Props extends HTMLAttributes<HTMLDivElement> {
  classes?: string
}

export default Footer
