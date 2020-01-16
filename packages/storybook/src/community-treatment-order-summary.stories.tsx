import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import readme from '@ltht-react/community-treatment-order-summary/README.md'
import * as fixtures from '@ltht-react/community-treatment-order-summary/src/fixtures'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'

const stories = storiesOf('Components|Community Treatment Order|Examples', module)

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

const handleClick = (communityTreatmentOrder: LypftCommunityTreatmentOrder) => {
  console.log('item clicked ', communityTreatmentOrder)
}

stories.addWithJSX('Community Treatment Order Summary', () => (
  <CommunityTreatmentOrderSummary
    title="Community Treatment Orders"
    communityTreatmentOrders={[fixtures.CommunityTreatmentOrderOne, fixtures.CommunityTreatmentOrderTwo]}
    clickHandler={handleClick}
  />
))
