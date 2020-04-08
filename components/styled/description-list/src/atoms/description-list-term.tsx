/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TEXT_COLOURS } from '@ltht-react/styles'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY.LIGHTER25} !important;
  margin-bottom: 0.25rem !important;
`

const DescriptionListTerm: React.FC = ({ children }) => {
  return <dt css={styles}>{children}</dt>
}

export default DescriptionListTerm
