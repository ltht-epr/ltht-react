/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

const styles = (collapsed: boolean): SerializedStyles => {
  return css`
    padding: 0 0.5rem 0 0.5rem !important;
    ${collapsed && 'display: none;'}
    > dl:first-of-type {
      margin-top: 0 !important;
    }
  `
}

const CardBody: React.FC<Props> = ({ children, collapsed = false }) => {
  return <div css={styles(collapsed)}>{children}</div>
}

interface Props {
  collapsed?: boolean
}

export default CardBody
