/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import FlagSummaryItem from './molecules/flag-summary-item'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'

const FlagSummary = ({ title, flags, clickHandler }: Props) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={clickHandler ? true : false}>
        {flags.map((flag, index) => (
          <WidgetListItem key={index}>
            <FlagSummaryItem key={index} flag={flag} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  flags: Flag[]
  clickHandler?(flag: Flag): void
}

export default FlagSummary
