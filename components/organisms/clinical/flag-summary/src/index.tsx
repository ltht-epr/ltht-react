import React from 'react'

import { Flag } from '@ltht-react/types'
import { Card, CardHeader, CardList, CardListItem } from '@ltht-react/card'
import FlagSummaryItem from './molecules/flag-summary-item'

const FlagSummary: React.FC<Props> = ({ title, flags = [], clickHandler }) => {
  return (
    <Card noData={flags.length === 0}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardList clickable={!!clickHandler}>
        {flags.map(flag => (
          <CardListItem key={flag.id}>
            <FlagSummaryItem flag={flag} clickHandler={clickHandler} />
          </CardListItem>
        ))}
      </CardList>
    </Card>
  )
}

interface Props {
  title?: string
  flags: Flag[] | undefined
  clickHandler?(flag: Flag): void
}

export default FlagSummary
