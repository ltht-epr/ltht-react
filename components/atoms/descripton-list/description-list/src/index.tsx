/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const styles = css`
  list-style: none;
  padding-left: 0.5rem;
`

const DescriptionList: React.FC = ({ children }) => {
  return <dl css={styles}>{children}</dl>
}

export default DescriptionList
