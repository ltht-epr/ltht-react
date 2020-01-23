/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_PRIMARY_COLOUR } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_PRIMARY_COLOUR};
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
