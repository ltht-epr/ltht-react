import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CommunityTreatmentOrderSummary from '@ltht-react/community-treatment-order-summary'
import readme from '@ltht-react/community-treatment-order-summary/README.md'
import * as fixtures from './community-treatment-order.fixtures'

const stories = storiesOf('Components|Community Treatment Order', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Community Treatment Order Summary', () => (
  <CommunityTreatmentOrderSummary
    title="Community Treatment Orders"
    communityTreatmentOrders={[fixtures.CommunityTreatmentOrderOne, fixtures.CommunityTreatmentOrderTwo]}
  />
))
