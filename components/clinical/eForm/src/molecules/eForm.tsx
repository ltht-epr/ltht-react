/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

import { CSS_RESET, EFORM_BACKGROUND_COLOUR } from '@ltht-react/styles'

const styles = (): SerializedStyles => {
  return css`
    ${CSS_RESET}
    background: ${EFORM_BACKGROUND_COLOUR};
    padding: 0.5rem;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(102, 102, 102, 0.1), 0px 1px 1px 0px rgba(102, 102, 102, 0.15),
      0px 1px 3px 0px rgba(102, 102, 102, 0.6);
    -webkit-font-smoothing: antialiased;
  `
}

const EForm: React.FC<Props> = ({ url }) => (
  <div css={styles}>
    <iframe src={url} title="eForm" />
  </div>
)

interface Props {
  url: string
}

export default EForm
