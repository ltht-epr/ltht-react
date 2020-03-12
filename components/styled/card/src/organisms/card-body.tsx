/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'
import useCard from '../store/card-hook'

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
    &:before {
      content: '';
      display: block;
      border-top: 1px solid #b0b0b0;
      margin: -0.5rem -0.5rem 0.5rem 0;
    }
    ${childrenCount > 2 && bodyAfter}
  `
}

const CardBody: React.FC = ({ children }) => {
  const { collapseButton, childrenCount } = useCard()
  return <div css={styles(collapseButton.collapsed, childrenCount)}>{children}</div>
}

export default CardBody
