/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { WIDGET_STYLES, CSS_RESET } from '@ltht-react/styles'
import { Flag, AllergyIntolerance } from '@ltht-react/types'
import AllergySummaryItem from './molecules/allergy-summary-item'

const titleStyles = css`
  margin-bottom: 0.5rem;
`

const AllergySummary = ({ title, allergies, clickHandler }: Props) => {
  return (
    <div css={WIDGET_STYLES}>
      <div css={CSS_RESET}>
        <h3 css={titleStyles}>{title}</h3>
        <ul>
          {allergies.map((allergy, index) => (
            <AllergySummaryItem key={index} allergy={allergy} clickHandler={clickHandler} />
          ))}
        </ul>
      </div>
    </div>
  )
}

interface Props {
  title: string
  allergies: AllergyIntolerance[]
  clickHandler(allergy: AllergyIntolerance): void
}

export default AllergySummary
