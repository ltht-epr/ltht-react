import React from 'react'

import { AllergyIntolerance } from '@ltht-react/types'
import AllergySummaryItem from './molecules/allergy-summary-item'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'

const AllergySummary = ({ title = 'Allergies', allergies = [], clickHandler }: Props) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      <WidgetList clickable={clickHandler ? true : false}>
        {allergies.map((allergy, index) => (
          <WidgetListItem key={index}>
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
