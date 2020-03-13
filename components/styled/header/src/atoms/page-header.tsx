/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TEXT_COLOURS } from '@ltht-react/styles'

const styles = css`
  list-style: none;
  padding-left: 0.5rem;
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: center;
`

const PageHeader: React.FC = ({ children }) => {
  return <h1 css={styles}>{children}</h1>
}

export default PageHeader
