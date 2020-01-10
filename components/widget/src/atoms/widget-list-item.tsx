/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CSS_RESET } from '@ltht-react/styles'

const styles = css`  
`

const WidgetListItem: React.FC = ({ children }) => {
  return <li css={styles}>{children}</li>
}

export default WidgetListItem
