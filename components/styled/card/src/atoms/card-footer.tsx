/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

const styles = (collapsed: boolean): SerializedStyles => {
  return css`
    padding: 0 0.5rem 0 0.5rem !important;
    ${collapsed && 'display: none;'}
  `
}

const CardFooter: React.FC<Props> = ({ children, collapsed = false }) => {
  return <div css={styles(collapsed)}>{children}</div>
}

interface Props {
  collapsed?: boolean
}

export default CardFooter
