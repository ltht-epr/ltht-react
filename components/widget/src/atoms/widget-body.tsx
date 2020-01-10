/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const styles = css`
  padding: 0.5rem 0 0.5rem 0.5rem;
`

const WidgetBody: React.FC = ({ children }) => {
  return <div css={styles}>{children}</div>
}

export default WidgetBody
