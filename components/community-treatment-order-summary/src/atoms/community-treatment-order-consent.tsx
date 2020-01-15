/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { SECONDARY_TEXT_COLOUR } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'

const styles = css`
  color: ${SECONDARY_TEXT_COLOUR};
  text-align: right;
`

const CommunityTreatmentOrderConsent = ({
  communityTreatmentOrder,
}: {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}) => {
  return <div css={styles}>{communityTreatmentOrder.consentToTreat && communityTreatmentOrder.consentToTreat}</div>
}

export default CommunityTreatmentOrderConsent
