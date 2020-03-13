/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

export const styles = css`
  display: block;
  position: relative;
  margin-bottom: 0.5rem;
`

const FormCheck: React.FC = ({ children }) => {
  return (
    <div className="form-check" css={styles}>
      {children}
    </div>
  )
}

export default FormCheck
