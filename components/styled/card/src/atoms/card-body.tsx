/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

const bodyAfter = css`
  &:after {
    content: '';
    display: block;
    border-top: 1px solid #b0b0b0;
    margin: 0.5rem -0.5rem -0.5rem 0;
  }
`

const styles = (collapsed: boolean, childrenCount: number): SerializedStyles => {
  return css`
    padding: 0.5rem;
    ${collapsed && 'display: none;'}
    > dl:first-of-type {
      margin-top: 0 !important;
    }
    /* &:before {
      content: '';
      display: block;
      border-top: 1px solid #b0b0b0;
      margin: -0.5rem -0.5rem 0.5rem 0;
    }
    ${childrenCount > 2 && bodyAfter} */
  `
}

const CardBody: React.FC<Props> = ({ children, collapsed = false }) => {
  return <div css={styles(collapsed, React.Children.count(children))}>{children}</div>
}

interface Props {
  collapsed?: boolean
}

export default CardBody
