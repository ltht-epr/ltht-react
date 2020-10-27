import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

export interface Props {
  classes?: string
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-width: 1px 0 1px 0;

  &:first-child {
    border-top-width: 0;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &:last-child {
    border-bottom-width: 0;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`

const List: React.FC<Props> = ({ classes, children }) => {
  return <StyledList className={classNames('card__list', classes)}>{children}</StyledList>
}

export default List
