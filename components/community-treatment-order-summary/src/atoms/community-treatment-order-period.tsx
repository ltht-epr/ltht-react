/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { PRIMARY_TEXT_COLOUR } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'

const styles = css`
  color: ${PRIMARY_TEXT_COLOUR};
  text-align: right;
`

const CommunityTreatmentOrderPeriod = ({
  communityTreatmentOrder,
}: {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}) => {
  return <div css={styles}>{periodSummaryText(communityTreatmentOrder.period)}</div>
}

export default CommunityTreatmentOrderPeriod
