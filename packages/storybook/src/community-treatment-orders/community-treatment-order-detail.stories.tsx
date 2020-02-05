import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CommunityTreatmentOrderDetail from '@ltht-react/community-treatment-order-detail'
import readme from '@ltht-react/community-treatment-order-detail/README.md'
import { CommunityTreatmentOrderOne } from './community-treatment-order.fixtures'

const stories = storiesOf('Components|Community Treatment Order', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Community Treatment Order Detail', () => (
  <CommunityTreatmentOrderDetail communityTreatmentOrder={CommunityTreatmentOrderOne} />
))
