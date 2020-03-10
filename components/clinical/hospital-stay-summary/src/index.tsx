import React from 'react'

import { Encounter } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import { Card, CardHeader, CardList } from '@ltht-react/card'
import HospitalStaySummaryItem from './molecules/hospital-stay-summary-item'

const HospitalStaySummary: React.FC<Props> = ({ title = 'Hospital Stays', hospitalStays = [], clickHandler }) => {
  return (
    <Card noData={hospitalStays.length === 0}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardList clickable={!!clickHandler}>
        {hospitalStays.map(encounter => (
          <ListItem key={encounter.id}>
            <HospitalStaySummaryItem hospitalStay={encounter} clickHandler={clickHandler} />
          </ListItem>
        ))}
      </CardList>
    </Card>
  )
}

interface Props {
  title?: string
  hospitalStays: Encounter[] | undefined
  clickHandler?(allergy: Encounter): void
}

export default HospitalStaySummary
