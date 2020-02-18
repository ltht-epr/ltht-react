import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CarePlanSummary from '@ltht-react/care-plan-summary'
import readme from '@ltht-react/care-plan-summary/README.md'
import * as fixtures from './care-plan.fixtures'

const stories = storiesOf('Organisms - Clinical|Care Plan', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <CarePlanSummary title="Care Plans" carePlans={[fixtures.CarePlanOne, fixtures.CarePlanTwo]} />
))
