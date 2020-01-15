/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { PRIMARY_TEXT_COLOUR } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'

const styles = css`
  color: ${PRIMARY_TEXT_COLOUR};
  text-align: left;
`

const CommunityTreatmentOrderConsent = ({
  communityTreatmentOrder,
}: {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}) => {
  return <div css={styles}>{communityTreatmentOrder.legalStatus && communityTreatmentOrder.legalStatus.text}</div>
}

export default CommunityTreatmentOrderConsent
