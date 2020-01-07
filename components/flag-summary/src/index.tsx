/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { WIDGET_STYLES, CSS_RESET } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import FlagSummaryItem from './molecules/flag-summary-item'

const titleStyles = css`
  margin-bottom: 0.5rem;
`

const FlagSummary = ({ title, flags, clickHandler }: Props) => {
  return (
    <div css={WIDGET_STYLES}>
      <div css={CSS_RESET}>
        <h3 css={titleStyles}>{title}</h3>
        <ul>
          {flags.map((flag, index) => (
            <FlagSummaryItem key={index} flag={flag} clickHandler={clickHandler} />
          ))}
        </ul>
      </div>
    </div>
  )
}

interface Props {
  title: string
  flags: Flag[]
  clickHandler(flag: Flag): void
}

export default FlagSummary
