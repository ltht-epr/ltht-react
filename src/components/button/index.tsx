import React from 'react'
import { css } from '@emotion/core'

const styles = css`
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  background-color: #00823b;
  border: none;
  box-shadow: 0 2px 0 #003618;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  line-height: 1.25;
  outline-offset: -1px;
  outline: 1px solid transparent;
  padding: 0.526315em 0.789473em 0.263157em;
  position: relative;
  text-decoration: none;
`

const Button: React.FC = ({ children }) => <button css={styles}>{children}</button>

export default Button
