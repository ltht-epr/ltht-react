import React from 'react'

import { Condition } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import ConditionSummaryItem from './molecules/condition-summary-item'

const ConditionSummary: React.FC<Props> = ({ conditions = [], clickHandler }) => {
  const elements = conditions.map(condition => (
    <ListItem key={condition.id}>
      <ConditionSummaryItem condition={condition} clickHandler={clickHandler} />
    </ListItem>
  ))

  return <>{elements}</>
}

interface Props {
  conditions: Condition[] | undefined
  clickHandler?(appointment: Condition): void
}

export default ConditionSummary
