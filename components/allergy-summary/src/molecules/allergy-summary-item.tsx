/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { AllergyIntolerance } from '@ltht-react/types'
import AllergyTitle from '../atoms/allergy-title'
import AllergyDate from '../atoms/allergy-date'
import AllergyDescription from '../atoms/allergy-description'
import AllergyStatus from '../atoms/allergy-status'
import AllergyIcon from '../atoms/allergy-icon'

const styles = css`
  display: flex;
  justify-content: center;
`
const descriptionStyles = css`
  flex-grow: 1;
  padding-left: 0.5rem;
`

const iconStyles = css`
  min-width: 1rem;
`

const AllergySummaryItem = ({ allergy, clickHandler }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    clickHandler && clickHandler(allergy)
  }
  return (
    <div css={styles} onClick={clickHandler && handleClick}>
      <div css={iconStyles}>
        <AllergyIcon allergy={allergy} />
      </div>
      <div css={descriptionStyles}>
        <AllergyTitle allergy={allergy} />
        <AllergyDescription allergy={allergy} />
      </div>
      <div>
        <AllergyDate allergy={allergy} />
        <AllergyStatus allergy={allergy} />
      </div>
    </div>
  )
}

interface Props {
  allergy: AllergyIntolerance
  clickHandler?(allergy: AllergyIntolerance): void
}

export default AllergySummaryItem
