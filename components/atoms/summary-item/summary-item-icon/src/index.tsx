/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const styles = css`
  min-width: 1rem;
`

const SummaryItemIcon: React.FC = ({ children }) => {
  return <div css={styles}>{children}</div>
}

export default SummaryItemIcon
