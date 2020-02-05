/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_SECONDARY_COLOUR } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  text-align: left;
`

const CommunityTreatmentOrderSummaryRestrictions: React.FC<Props> = ({ communityTreatmentOrder }) => {
  return <div css={styles}>{communityTreatmentOrder.restrictions && communityTreatmentOrder.restrictions}</div>
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderSummaryRestrictions
