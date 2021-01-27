import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

const StyledListItem = styled.li``

const ListItem: React.FC<Props> = ({ children, tabIndex, ...rest }) => {
  const listItemProps = {
    ...(tabIndex && { tabIndex }),
    ...rest,
  }

  return (
    <StyledListItem className="list__item" {...listItemProps}>
      {children}
    </StyledListItem>
  )
}

interface Props extends HTMLAttributes<HTMLLIElement> {
  tabIndex?: number
}

export default ListItem
