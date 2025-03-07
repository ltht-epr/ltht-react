import { HTMLAttributes, FC } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

const StyledBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.5rem 0.75rem;
  margin: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`

const Body: FC<Props> = ({ classes, children, ...rest }) => (
  <StyledBody className={classNames('card__body', classes)} {...rest}>
    {children}
  </StyledBody>
)

export interface Props extends HTMLAttributes<HTMLDivElement> {
  classes?: string
}

export default Body
