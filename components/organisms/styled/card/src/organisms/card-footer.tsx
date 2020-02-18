/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'
import useCard from '../store/card-hook'

const styles = (collapsed: boolean): SerializedStyles => {
  return css`
    padding: 0.5rem;
    ${collapsed && 'display: none;'}
  `
}

const CardFooter: React.FC = ({ children }) => {
  const { collapseButton } = useCard()
  return <div css={styles(collapseButton.collapsed)}>{children}</div>
}

export default CardFooter
