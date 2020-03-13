/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const CommunityTreatmentOrderConsent: React.FC<Props> = ({ communityTreatmentOrder }) => {
  return <div css={styles}>{communityTreatmentOrder.legalStatus && communityTreatmentOrder.legalStatus.text}</div>
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderConsent
