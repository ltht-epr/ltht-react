import React from 'react'

import { AllergyIntolerance } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'

import AllergySummaryItem from './molecules/allergy-summary-item'

const AllergySummary: React.FC<Props> = ({ title = 'Allergies', allergies = [], clickHandler }) => {
  return (
    <Widget noData={allergies.length === 0}>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={!!clickHandler}>
        {allergies.map(allergy => (
          <WidgetListItem key={allergy.id}>
            <AllergySummaryItem allergy={allergy} clickHandler={clickHandler} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  allergies: AllergyIntolerance[] | undefined
  clickHandler?(allergy: AllergyIntolerance): void
}

export default AllergySummary
