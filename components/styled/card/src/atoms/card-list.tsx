/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

import { CARD_LIST_ITEM_BORDER_COLOUR, CARD_LIST_ITEM_BACKGROUND_HOVER } from '@ltht-react/styles'

const computeStyles = (collapsed: boolean, clickable?: boolean): SerializedStyles => {
  return css`
    list-style: none;
    & li {
      border-top: 1px solid ${CARD_LIST_ITEM_BORDER_COLOUR};
      padding: 0.5rem;
      margin-right: -0.5rem;
    }
    & li:hover {
      ${clickable && `cursor: pointer;`}
      ${clickable && `background: ${CARD_LIST_ITEM_BACKGROUND_HOVER};`}
    }
    ${collapsed && 'display: none;'}
  `
}

const CardList: React.FC<Props> = ({ children, clickable, collapsed = false }) => {
  return <ul css={computeStyles(collapsed, clickable)}>{children}</ul>
}

interface Props {
  clickable?: boolean
  collapsed?: boolean
}

export default CardList
