/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const styles = css`
  list-style: none;
  padding: 0rem 0.5rem;
`

const DescriptionList: React.FC = ({ children }) => {
  return <dl css={styles}>{children}</dl>
}

export default DescriptionList
