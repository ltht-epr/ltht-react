/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { LypftCommunityTreatmentOrder, RedactedPosition } from '@ltht-react/types'
import { PeriodSummary, RedactedPeriodSummaryItem } from '@ltht-react/summary'

import Consent from '../atoms/community-treatment-order-summary-consent'
import Restrictions from '../atoms/community-treatment-order-summary-restrictions'
import Status from '../atoms/community-treatment-order-summary-status'

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

const CommunityTreatmentOrderSummaryItem: React.FC<Props> = ({ communityTreatmentOrder, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler(communityTreatmentOrder)
  }

  const summaryMarkup = (
    <React.Fragment>
      <div css={styles.description}>
        <Status communityTreatmentOrder={communityTreatmentOrder} />
        <Restrictions communityTreatmentOrder={communityTreatmentOrder} />
      </div>
      <div css={styles.date}>
        <PeriodSummary period={communityTreatmentOrder.period} />
        <Consent communityTreatmentOrder={communityTreatmentOrder} />
      </div>
    </React.Fragment>
  )

  return (
    <div css={styles.root} role="link" onClick={clickHandler && handleClick}>
      {communityTreatmentOrder.metadata.isRedacted ? (
        <RedactedPeriodSummaryItem period={communityTreatmentOrder.period} position={RedactedPosition.Left} />
      ) : (
        summaryMarkup
      )}
    </div>
  )
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
  clickHandler?(CommunityTreatmentOrder: LypftCommunityTreatmentOrder): void
}

export default CommunityTreatmentOrderSummaryItem
