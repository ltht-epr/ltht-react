import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CarePlanDetail from '@ltht-react/care-plan-detail'
import readme from '@ltht-react/care-plan-summary/README.md'
import * as fixtures from './care-plan.fixtures'

const stories = storiesOf('Components|Care Plan', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Care Plan Detail e.g. 1', () => (
  <CarePlanDetail title="Care Plan" carePlan={fixtures.CarePlanOne} />
))
stories.addWithJSX('Care Plan Detail e.g. 2', () => (
  <CarePlanDetail title="Care Plan" carePlan={fixtures.CarePlanTwo} />
))
