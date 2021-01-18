import React from 'react'

import { Encounter } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import HospitalStaySummaryItem from './organisms/hospital-stay-summary-item'

const HospitalStaySummary: React.FC<Props> = ({ hospitalStays = [], clickHandler }) => {
  return (
    <>
      {hospitalStays.map(encounter => (
        <ListItem key={encounter.id}>
          <HospitalStaySummaryItem hospitalStay={encounter} clickHandler={clickHandler} />
        </ListItem>
      ))}
    </>
  )
}

interface Props {
  hospitalStays: Encounter[] | undefined
  clickHandler?(allergy: Encounter): void
}

export default HospitalStaySummary
