/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { LypftCommunityTreatmentOrder } from '@ltht-react/types/'
import { StringDetail, CodeableConceptDetail, PeriodDetail } from '@ltht-react/detail'

const CommunityTreatmentOrderDetail: React.FC<Props> = ({ communityTreatmentOrder }) => {
  return (
    <React.Fragment>
      <StringDetail term="Consent" description={communityTreatmentOrder.consentToTreat} />
      <CodeableConceptDetail term="Legal Status" concept={communityTreatmentOrder.legalStatus} />
      <PeriodDetail period={communityTreatmentOrder?.period} />
      <StringDetail term="Restrictions" description={communityTreatmentOrder.restrictions} />
    </React.Fragment>
  )
}

interface Props {
  communityTreatmentOrder: LypftCommunityTreatmentOrder
}

export default CommunityTreatmentOrderDetail
