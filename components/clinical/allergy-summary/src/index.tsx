import React from 'react'

import { AllergyIntolerance } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'

import AllergySummaryItem from './organisms/allergy-summary-item'

const AllergySummary: React.FC<Props> = ({ allergies = [], clickHandler }) => {
  return (
    <>
      {allergies.map(allergy => (
        <ListItem key={allergy.id}>
          <AllergySummaryItem allergy={allergy} clickHandler={clickHandler} />
        </ListItem>
      ))}
    </>
  )
}

interface Props {
  allergies: AllergyIntolerance[] | undefined
  clickHandler?(allergy: AllergyIntolerance): void
}

export default AllergySummary
