import React from 'react'

import { AllergyIntolerance } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import { Card, CardHeader, CardList } from '@ltht-react/card'

import AllergySummaryItem from './molecules/allergy-summary-item'

const AllergySummary: React.FC<Props> = ({ title = 'Allergies', allergies = [], clickHandler }) => {
  return (
    <Card noData={allergies.length === 0}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardList clickable={!!clickHandler}>
        {allergies.map(allergy => (
          <ListItem key={allergy.id}>
            <AllergySummaryItem allergy={allergy} clickHandler={clickHandler} />
          </ListItem>
        ))}
      </CardList>
    </Card>
  )
}

interface Props {
  title?: string
  allergies: AllergyIntolerance[] | undefined
  clickHandler?(allergy: AllergyIntolerance): void
}

export default AllergySummary
