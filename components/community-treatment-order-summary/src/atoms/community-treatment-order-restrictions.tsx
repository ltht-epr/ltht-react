/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: left;
`

const CommunityTreatmentOrderConsent = ({
  communityTreatmentOrder,
}: {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}) => {
  return <div css={styles}>{communityTreatmentOrder.restrictions && communityTreatmentOrder.restrictions}</div>
}

export default CommunityTreatmentOrderConsent
