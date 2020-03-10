/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TEXT_PRIMARY_COLOUR } from '@ltht-react/styles'

const styles = css`
  color: ${TEXT_PRIMARY_COLOUR};
  margin-top: 0.5rem;
`

const DescriptionListTerm: React.FC = ({ children }) => {
  return <dt css={styles}>{children}</dt>
}

export default DescriptionListTerm
