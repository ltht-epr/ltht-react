/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const styles = css`
  padding: 0.5rem;
`

const WidgetHeader: React.FC = ({ children }) => {
  return <div css={styles}>{children}</div>
}

export default WidgetHeader
