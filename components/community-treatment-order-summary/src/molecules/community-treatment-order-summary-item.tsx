/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import Consent from '../atoms/community-treatment-order-consent'
import Period from '../atoms/community-treatment-order-period'
import Restrictions from '../atoms/community-treatment-order-restrictions'
import Status from '../atoms/community-treatment-order-status'

const styles = {
  root: css`
    display: flex;
    justify-content: center;
  `,
  description: css`
    flex-grow: 1;
  `,
}

const CommunityTreatmentOrderSummaryItem: React.FC<Props> = ({ communityTreatmentOrder, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler(communityTreatmentOrder)
  }
  return (
    <div css={styles.root} role="link" onClick={clickHandler && handleClick}>
      <div css={styles.description}>
        <Status communityTreatmentOrder={communityTreatmentOrder} />
        <Restrictions communityTreatmentOrder={communityTreatmentOrder} />
      </div>
      <div css={styles.description}>
        <Period communityTreatmentOrder={communityTreatmentOrder} />
        <Consent communityTreatmentOrder={communityTreatmentOrder} />
      </div>
    </div>
  )
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
  clickHandler?(CommunityTreatmentOrder: LypftCommunityTreatmentOrder): void
}

export default CommunityTreatmentOrderSummaryItem
