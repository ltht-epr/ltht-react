/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

import { CARD_LIST_ITEM_BACKGROUND_HOVER } from '@ltht-react/styles'
import useCard from '../store/card-hook'

const computeStyles = (collapsed: boolean, clickable?: boolean): SerializedStyles => {
  return css`
    list-style: none;
    padding-left: 0.5rem;
    & li {
      border-top: 1px solid #b0b0b0;
      padding: 0.5rem 0.5rem 0.5rem 0;
    }
    & li:hover {
      ${clickable && `cursor: pointer;`}
      ${clickable && `background: ${CARD_LIST_ITEM_BACKGROUND_HOVER};`}
    }
    ${collapsed && 'display: none;'}
  `
}

const CardList: React.FC<Props> = ({ children, clickable }) => {
  const { collapseButton } = useCard()
  return <ul css={computeStyles(collapseButton.collapsed, clickable)}>{children}</ul>
}

interface Props {
  clickable?: boolean
}

export default CardList
