import React from 'react'
import { storiesOf } from '@storybook/react'

import CarePlanSummary from '@ltht-react/care-plan-summary'
import readme from '@ltht-react/care-plan-summary/README.md'
import * as fixtures from '@ltht-react/care-plan-summary/src/fixtures'
import { CarePlan } from '@ltht-react/types'

const stories = storiesOf('Components|Care Plan|Examples', module)

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

const handleClick = (carePlan: CarePlan) => {
  console.log('item clicked ', carePlan)
}

stories.addWithJSX('Care Plan Summary', () => (
  <CarePlanSummary
    title="Care Plans"
    carePlans={[fixtures.CarePlanOne, fixtures.CarePlanTwo]}
    clickHandler={handleClick}
  />
))
