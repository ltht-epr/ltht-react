/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import CommunityTreatmentOrderConsent from '../atoms/community-treatment-order-consent'
import CommunityTreatmentOrderPeriod from '../atoms/community-treatment-order-period'
import CommunityTreatmentOrderRestrictions from '../atoms/community-treatment-order-restrictions'
import CommunityTreatmentOrderStatus from '../atoms/community-treatment-order-status'

const styles = css`
  display: flex;
  justify-content: center;
`
const descriptionStyles = css`
  flex-grow: 1;
`

const CommunityTreatmentOrderSummaryItem = ({ communityTreatmentOrder, clickHandler }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    clickHandler && clickHandler(communityTreatmentOrder)
  }
  return (
    <div css={styles} onClick={clickHandler && handleClick}>
      <div css={descriptionStyles}>
        <CommunityTreatmentOrderStatus communityTreatmentOrder={communityTreatmentOrder} />
        <CommunityTreatmentOrderRestrictions communityTreatmentOrder={communityTreatmentOrder} />
      </div>
      <div css={descriptionStyles}>
        <CommunityTreatmentOrderPeriod communityTreatmentOrder={communityTreatmentOrder} />
        <CommunityTreatmentOrderConsent communityTreatmentOrder={communityTreatmentOrder} />
      </div>
    </div>
  )
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
  clickHandler?(CommunityTreatmentOrder: LypftCommunityTreatmentOrder): void
}

export default CommunityTreatmentOrderSummaryItem
