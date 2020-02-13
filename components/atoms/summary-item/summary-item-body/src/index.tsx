/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const styles = css`
  display: flex;
  justify-content: center;
`

const SummaryItemBody: React.FC<Props> = ({ children, handleClick }) => {
  return (
    <div css={styles} role="link" onClick={handleClick}>
      {children}
    </div>
  )
}

interface Props {
  handleClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void
}

export default SummaryItemBody
