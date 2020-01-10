/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { ThemeContext } from './widget'
import { CSS_RESET } from '@ltht-react/styles'

const computeStyles = (itemCount: number) => {
  return css`
    list-style: none;
    padding-left: 0.5rem;
    & li {
      border-top: 1px solid #b0b0b0;
      padding: 0.5rem 0;
    }
    & li:last-child {
      border-bottom: 1px solid #b0b0b0;
    }
  `
}

const WidgetList: React.FC = ({ children }) => {
  const theme = React.useContext(ThemeContext)
  const styles = computeStyles(theme.count)
  return <ul css={styles}>{children}</ul>
}

export default WidgetList
