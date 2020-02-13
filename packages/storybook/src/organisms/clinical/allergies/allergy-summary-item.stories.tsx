import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AllergySummaryItem from '@ltht-react/allergy-summary-item'
import readme from '@ltht-react/allergy-summary-item/README.md'
import * as fixtures from './allergy.fixtures'

const stories = storiesOf('Organisms|Clinical', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Allergy Summary Item', () => <AllergySummaryItem allergy={fixtures.AllergyOne} />)
