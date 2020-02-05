/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: right;
`

const CommunityTreatmentOrderSummaryConsent: React.FC<Props> = ({ communityTreatmentOrder }) => {
  return <div css={styles}>{communityTreatmentOrder.consentToTreat && communityTreatmentOrder.consentToTreat}</div>
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderSummaryConsent
