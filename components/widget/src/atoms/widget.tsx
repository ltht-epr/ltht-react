/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CSS_RESET } from '@ltht-react/styles'

const styles = css`
  ${CSS_RESET}
  background: #fff;
  color: #000;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  box-shadow: 3px 3px 3px #666;
  -webkit-box-shadow: 3px 3px 3px #666;
  margin: 0 5px 10px 0;
  -webkit-font-smoothing: antialiased;
`

const Widget: React.FC<Props> = ({ children }) => {
  return <div css={styles}>{children}</div>
}

interface Props {
  children: any
}

export default Widget
