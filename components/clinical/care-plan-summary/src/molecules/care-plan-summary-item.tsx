/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CarePlan, RedactedPosition } from '@ltht-react/types'
import { PeriodSummary, RedactedPeriodSummaryItem } from '@ltht-react/summary'

import Description from '../atoms/care-plan-description'
import Status from '../atoms/care-plan-status'
import Title from '../atoms/care-plan-title'

const styles = {
  root: css`
    display: flex;
    justify-content: center;
  `,
  description: css`
    flex-grow: 1;
  `,
  date: css`
    text-align: right;
  `,
}

const CarePlanSummaryItem: React.FC<Props> = ({ carePlan, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler(carePlan)
  }

  const summaryMarkup = (
    <React.Fragment>
      <div css={styles.description}>
        <Title carePlan={carePlan} />
        <Description carePlan={carePlan} />
      </div>
      <div css={styles.date}>
        <PeriodSummary period={carePlan.period} />
        <Status carePlan={carePlan} />
      </div>
    </React.Fragment>
  )

  return (
    <div css={styles.root} role="link" onClick={clickHandler && handleClick}>
      {carePlan.metadata.isRedacted ? (
        <RedactedPeriodSummaryItem period={carePlan.period} position={RedactedPosition.Left} />
      ) : (
        summaryMarkup
      )}
    </div>
  )
}

interface Props {
  carePlan: CarePlan
  clickHandler?(carePlan: CarePlan): void
}

export default CarePlanSummaryItem
