/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import CommunityTreatmentOrderConsent from '../atoms/community-treatment-order-consent'
import CommunityTreatmentOrderPeriod from '../atoms/community-treatment-order-period'
import CommunityTreatmentOrderRestrictions from '../atoms/community-treatment-order-restrictions'
import CommunityTreatmentOrderStatus from '../atoms/community-treatment-order-status'

const styles = {
  root: css`
    display: flex;
    justify-content: center;
  `,
  description: css`
    flex-grow: 1;
  `,
}

const CommunityTreatmentOrderSummaryItem: React.FC<Props> = ({ communityTreatmentOrder, clickHandler, tabIndex }) => {
  const handleClick = (e: EventTypes): void => {
    e.preventDefault()
    clickHandler && clickHandler(communityTreatmentOrder)
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
        <CommunityTreatmentOrderStatus communityTreatmentOrder={communityTreatmentOrder} />
        <CommunityTreatmentOrderRestrictions communityTreatmentOrder={communityTreatmentOrder} />
      </div>
      <div css={styles.description}>
        <CommunityTreatmentOrderPeriod communityTreatmentOrder={communityTreatmentOrder} />
        <CommunityTreatmentOrderConsent communityTreatmentOrder={communityTreatmentOrder} />
      </div>
    </div>
  )
}

type EventTypes = React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
  clickHandler?(CommunityTreatmentOrder: LypftCommunityTreatmentOrder): void
  tabIndex: number
}

export default CommunityTreatmentOrderSummaryItem
