/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TEXT_COLOURS } from '@ltht-react/styles'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY};
`

const DescriptionListDescription: React.FC = ({ children }) => {
  return <dd css={styles}>{children}</dd>
}

export default DescriptionListDescription
