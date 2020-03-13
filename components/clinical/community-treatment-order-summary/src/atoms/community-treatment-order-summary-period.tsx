/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { periodSummaryText } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: right;
`

const CommunityTreatmentOrderSummaryPeriod: React.FC<Props> = ({ communityTreatmentOrder }) => {
  return <div css={styles}>{periodSummaryText(communityTreatmentOrder.period)}</div>
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderSummaryPeriod
