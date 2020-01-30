/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CSS_RESET, TEXT_PRIMARY_COLOUR, WIDGET_BACKGROUND_COLOUR } from '@ltht-react/styles'

const styles = css`
  ${CSS_RESET}
  background: ${WIDGET_BACKGROUND_COLOUR};
  color: ${TEXT_PRIMARY_COLOUR};
  margin-bottom: 0.5rem;
  border-radius: 4px;
  box-shadow: 
    0px 2px 1px -1px rgba(102, 102, 102, 0.1), 
    0px 1px 1px 0px rgba(102, 102, 102, 0.15), 
    0px 1px 3px 0px rgba(102, 102, 102,.6);
  margin: 0 5px 10px 0;
  -webkit-font-smoothing: antialiased;
`

const Widget: React.FC = ({ children }) => {
  return <div css={styles}>{children}</div>
}

export default Widget
