/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { AllergyIntolerance } from '@ltht-react/types'
import AllergySummaryItem from './molecules/allergy-summary-item'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'

const titleStyles = css`
  margin-bottom: 0.5rem;
`

const AllergySummary = ({ title = 'Allergies', allergies, clickHandler }: Props) => {
  return (
    <Widget>
      <WidgetHeader>
        <h3 css={titleStyles}>{title}</h3>
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
  allergies: AllergyIntolerance[]
  clickHandler?(allergy: AllergyIntolerance): void
}

export default AllergySummary
