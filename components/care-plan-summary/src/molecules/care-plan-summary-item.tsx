/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CarePlan } from '@ltht-react/types'
import CarePlanDate from '../atoms/care-plan-date'
import CarePlanDescription from '../atoms/care-plan-description'
import CarePlanStatus from '../atoms/care-plan-status'
import CarePlanTitle from '../atoms/care-plan-title'

const styles = css`
  display: flex;
  justify-content: center;
`
const descriptionStyles = css`
  flex-grow: 1;
`

const CarePlanSummaryItem = ({ carePlan, clickHandler }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    clickHandler && clickHandler(carePlan)
  }
  return (
    <div css={styles} onClick={clickHandler && handleClick}>
      <div css={descriptionStyles}>
        <CarePlanTitle carePlan={carePlan} />
        <CarePlanDescription carePlan={carePlan} />
      </div>
      <div>
        <CarePlanDate carePlan={carePlan} />
        <CarePlanStatus carePlan={carePlan} />
      </div>
    </div>
  )
}

interface Props {
  carePlan: CarePlan
  clickHandler?(carePlan: CarePlan): void
}

export default CarePlanSummaryItem
