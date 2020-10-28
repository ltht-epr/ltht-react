import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

export interface Props {
  classes?: string
}

const StyledListItem = styled.li`
  position: relative;
  display: block;
  padding: 0.75rem 0.75rem 0.75rem 0;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-width: 0 0 1px;

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

const ListItem: React.FC<Props> = ({ classes, children }) => {
  return <StyledListItem className={classNames('card__list-item', classes)}>{children}</StyledListItem>
}

export default ListItem
