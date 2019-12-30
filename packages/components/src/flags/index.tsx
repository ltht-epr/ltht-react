/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import { Widget } from '../widget'
import { ExclamationIcon } from '../icons'
import { Flag } from '@ltht-react/core'

const FlagSummaryItem = ({ flag }: { flag: Flag }) => {
  const li_styles = css`
    display: flex;
    border-top: 1px solid #b0b0b0;
    padding: 0.6rem 0;
    justify-content: center;
  `
  return (
    <li css={li_styles}>
      <div>
        <ExclamationIcon status="red" size="small" />
      </div>
      <div>{/* coding snippet */}</div>
      <div>{/* period summary */}</div>
    </li>
  )
}

const FlagSummary: React.FC<FlagSummaryProps> = ({ title = 'Flag Summary', flags = [] }) => {
  const ul_styles = css`
    list-style-type: none;
  `
  return (
    <Widget>
      <h3>{title}</h3>
      <ul css={ul_styles}>
        {flags.map((flag, index) => (
          <FlagSummaryItem key={index} flag={flag} />
        ))}
      </ul>
    </Widget>
  )
}

interface FlagSummaryProps {
  title?: string
  flags?: Flag[]
}

export { FlagSummary }
