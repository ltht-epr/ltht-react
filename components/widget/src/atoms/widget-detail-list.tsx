/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TEXT_SECONDARY_COLOUR, TEXT_PRIMARY_COLOUR } from '@ltht-react/styles'

const styles = css`
  list-style: none;
  padding-left: 0.5rem;
  & dt {
    color: ${TEXT_SECONDARY_COLOUR};
    margin-top: 10px;
  }
  & dd {
    color: ${TEXT_PRIMARY_COLOUR};
    margin-top: 5px;
  }
`

const WidgetDetailList: React.FC = ({ children }) => {
  return <dl css={styles}>{children}</dl>
}

export default WidgetDetailList
