/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

export const styles = css`
  margin: 0rem;
`

const Form: React.FC<Props> = ({ submitHandler, children }) => {
  return (
    <form onSubmit={submitHandler} css={styles}>
      {children}
    </form>
  )
}

interface Props {
  submitHandler(evt: React.FormEvent<HTMLFormElement>): void
}

export default Form
