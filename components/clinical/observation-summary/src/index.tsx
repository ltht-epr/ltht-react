import { FC } from 'react'

import { Observation } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import ObservationSumaryItem from './organisms/observation-summary-item'

const ObservationSummary: FC<Props> = ({ observations = [], clickHandler }) => {
  return (
    <>
      {observations.map(observation => (
        <ListItem key={observation.id}>
          <ObservationSumaryItem observation={observation} clickHandler={clickHandler} />
        </ListItem>
      ))}
    </>
  )
}

interface Props {
  observations: Observation[] | undefined
  clickHandler?(observation: Observation): void
}

export default ObservationSummary
