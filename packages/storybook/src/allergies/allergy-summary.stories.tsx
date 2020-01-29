import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AllergySummary from '@ltht-react/allergy-summary'
import readme from '@ltht-react/allergy-summary/README.md'
import * as fixtures from './allergy-summary.fixtures'

const stories = storiesOf('Components|Allergy|Examples', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Allergy Summary', () => (
  <AllergySummary title="Allergies" allergies={[fixtures.AllergyOne, fixtures.AllergyTwo]} />
))
