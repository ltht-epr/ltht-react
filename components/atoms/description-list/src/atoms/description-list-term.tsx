/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  margin-top: 10px;
`

const DescriptionListTerm: React.FC = ({ children }) => {
  return <dt css={styles}>{children}</dt>
}

export default DescriptionListTerm
