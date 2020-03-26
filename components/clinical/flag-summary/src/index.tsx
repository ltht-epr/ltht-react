import React from 'react'

import { Flag } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import FlagSummaryItem from './molecules/flag-summary-item'

const FlagSummary: React.FC<Props> = ({ flags = [], clickHandler }) => {
  return (
    <>
      {flags.map(flag => (
        <ListItem key={flag.id}>
          <FlagSummaryItem flag={flag} clickHandler={clickHandler} />
        </ListItem>
      ))}
    </>
  )
}

interface Props {
  flags: Flag[] | undefined
  clickHandler?(flag: Flag): void
}

export default FlagSummary
