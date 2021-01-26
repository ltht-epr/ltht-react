/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TEXT_COLOURS } from '@ltht-react/styles'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`
const RedactedDescription: React.FC = () => {
  return <div css={styles}>Insufficient privileges</div>
}
export default RedactedDescription
