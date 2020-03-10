import React from 'react'

import { Flag } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import { Card, CardHeader, CardList } from '@ltht-react/card'
import FlagSummaryItem from './molecules/flag-summary-item'

const FlagSummary: React.FC<Props> = ({ title, flags = [], clickHandler }) => {
  return (
    <Card noData={flags.length === 0}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardList clickable={!!clickHandler}>
        {flags.map(flag => (
          <ListItem key={flag.id}>
            <FlagSummaryItem flag={flag} clickHandler={clickHandler} />
          </ListItem>
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
