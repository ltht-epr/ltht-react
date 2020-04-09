/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const CommunityTreatmentOrderSummaryRestrictions: React.FC<Props> = ({ communityTreatmentOrder }) => {
  return <div css={styles}>{communityTreatmentOrder.restrictions && communityTreatmentOrder.restrictions}</div>
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderSummaryRestrictions
