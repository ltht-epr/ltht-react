import React from 'react'

import { Condition } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import { Card, CardHeader, CardList } from '@ltht-react/card'
import ConditionSummaryItem from './molecules/condition-summary-item'

const ConditionSummary: React.FC<Props> = ({ title = 'Conditions', conditions = [], clickHandler }) => {
  return (
    <Card noData={conditions.length === 0}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardList clickable={!!clickHandler}>
        {conditions.map(condition => (
          <ListItem key={condition.id}>
            <ConditionSummaryItem condition={condition} clickHandler={clickHandler} />
          </ListItem>
        ))}
      </CardList>
    </Card>
  )
}

interface Props {
  title?: string
  conditions: Condition[] | undefined
  clickHandler?(condition: Condition): void
}

export default ConditionSummary
