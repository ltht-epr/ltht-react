import { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-width: 1px 0 1px 0;
  list-style-type: none;
`

const List: FC<Props> = ({ classes, children, ...rest }) => (
  <StyledList className={classNames('card__list', classes)} {...rest}>
    {children}
  </StyledList>
)

export interface Props extends HTMLAttributes<HTMLUListElement> {
  classes?: string
}

export default List
