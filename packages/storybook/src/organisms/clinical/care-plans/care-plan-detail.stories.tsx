import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import CarePlanDetail from '@ltht-react/care-plan-detail'
import readme from '@ltht-react/care-plan-detail/README.md'
import * as fixtures from './care-plan.fixtures'

const stories = storiesOf('Organisms - Clinical|Care Plan', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Detail', () => <CarePlanDetail carePlan={fixtures.CarePlanThree} />)
