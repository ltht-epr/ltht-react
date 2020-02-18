/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TEXT_PRIMARY_COLOUR } from '@ltht-react/styles'

const styles = css`
  list-style: none;
  padding-left: 0.5rem;
  color: ${TEXT_PRIMARY_COLOUR};
  text-align: center;
`

const SubHeader: React.FC = ({ children }) => {
  return <h3 css={styles}>{children}</h3>
}

export default SubHeader
