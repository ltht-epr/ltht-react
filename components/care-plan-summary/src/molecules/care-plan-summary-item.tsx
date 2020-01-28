/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CarePlan } from '@ltht-react/types'
import CarePlanDate from '../atoms/care-plan-date'
import CarePlanDescription from '../atoms/care-plan-description'
import CarePlanStatus from '../atoms/care-plan-status'
import CarePlanTitle from '../atoms/care-plan-title'

const styles = {
  root: css`
    display: flex;
    justify-content: center;
  `,
  description: css`
    flex-grow: 1;
  `,
}

const CarePlanSummaryItem: React.FC<Props> = ({ carePlan, clickHandler, tabIndex }) => {
  const handleClick = (e: EventTypes): void => {
    e.preventDefault()
    clickHandler && clickHandler(carePlan)
  }
  return (
    <div
      css={styles.root}
      role="link"
      tabIndex={tabIndex}
      onClick={clickHandler && handleClick}
      onKeyDown={clickHandler && handleClick}
    >
      <div css={styles.description}>
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

type EventTypes = React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>

interface Props {
  carePlan: CarePlan
  clickHandler?(carePlan: CarePlan): void
  tabIndex: number
}

export default CarePlanSummaryItem
