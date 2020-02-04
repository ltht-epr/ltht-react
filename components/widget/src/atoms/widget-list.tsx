/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

import { WIDGET_LIST_ITEM_BACKGROUND_HOVER } from '@ltht-react/styles'
import { useWidget } from './widget-context'

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
      ${clickable && `background: ${WIDGET_LIST_ITEM_BACKGROUND_HOVER};`}
    }
    ${collapsed && 'display: none;'}
  `
}

const WidgetList: React.FC<Props> = ({ children, clickable }) => {
  const { collapseButton } = useWidget()
  return <ul css={computeStyles(collapseButton.collapsed, clickable)}>{children}</ul>
}

interface Props {
  clickable?: boolean
}

export default WidgetList
