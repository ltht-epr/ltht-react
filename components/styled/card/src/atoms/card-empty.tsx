/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'

const styles = css`
  padding: 0 0.5rem 0.5rem 0.5rem;
  color: ${TEXT_COLOURS.SECONDARY};
  font-style: italic;
`

const CardEmpty: React.FC = () => {
  return <div css={styles}>No records found.</div>
}

export default CardEmpty
