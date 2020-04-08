/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const styles = css`
  list-style: none;
  margin-top: 1rem !important;
`

const DescriptionList: React.FC = ({ children }) => {
  return <dl css={styles}>{children}</dl>
}

export default DescriptionList
