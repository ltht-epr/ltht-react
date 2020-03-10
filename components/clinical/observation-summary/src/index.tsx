import React from 'react'

import { Observation } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import { Card, CardHeader, CardList } from '@ltht-react/card'
import ObservationSumaryItem from './molecules/observation-summary-item'

const ObservationSummary: React.FC<Props> = ({ title = 'Care Plans', observations = [], clickHandler }) => {
  return (
    <Card noData={observations.length === 0}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardList clickable={!!clickHandler}>
        {observations.map(observation => (
          <ListItem key={observation.id}>
            <ObservationSumaryItem observation={observation} clickHandler={clickHandler} />
          </ListItem>
        ))}
      </CardList>
    </Card>
  )
}

interface Props {
  title?: string
  observations: Observation[] | undefined
  clickHandler?(observation: Observation): void
}

export default ObservationSummary
