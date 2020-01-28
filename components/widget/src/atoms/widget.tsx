/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CSS_RESET, TEXT_PRIMARY_COLOUR, WIDGET_BACKGROUND_COLOUR, WIDGET_SHADOW_COLOUR } from '@ltht-react/styles'

const styles = css`
  ${CSS_RESET}
  background: ${WIDGET_BACKGROUND_COLOUR};
  color: ${TEXT_PRIMARY_COLOUR};
  margin-bottom: 0.5rem;
  border-radius: 4px;
  box-shadow: 3px 3px 3px ${WIDGET_SHADOW_COLOUR};  
  margin: 0 5px 10px 0;
  -webkit-font-smoothing: antialiased;
`

const Widget: React.FC = ({ children }) => {
  return <div css={styles}>{children}</div>
}

export default Widget
