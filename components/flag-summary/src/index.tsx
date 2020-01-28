import React from 'react'

import { Flag } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'
import FlagSummaryItem from './molecules/flag-summary-item'

const FlagSummary: React.FC<Props> = ({ title, flags = [], clickHandler }) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={!!clickHandler}>
        {flags.map((flag, index) => (
          <WidgetListItem key={flag.id}>
            <FlagSummaryItem tabIndex={index} flag={flag} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  flags: Flag[] | undefined
  clickHandler?(flag: Flag): void
}

export default FlagSummary
