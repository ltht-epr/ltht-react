/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'
import { useWidget } from './widget-context'

const styles = (collapsed: boolean): SerializedStyles => {
  return css`
    padding: 0.5rem 0 0.5rem 0.5rem;
    ${collapsed && 'display: none;'}
  `
}

const WidgetBody: React.FC = ({ children }) => {
  const { collapseButton } = useWidget()
  return <div css={styles(collapseButton.collapsed)}>{children}</div>
}

export default WidgetBody
