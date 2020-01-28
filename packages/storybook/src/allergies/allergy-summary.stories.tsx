import React from 'react'
import { storiesOf } from '@storybook/react'

import AllergySummary from '@ltht-react/allergy-summary'
import readme from '@ltht-react/allergy-summary/README.md'
import * as fixtures from '@ltht-react/allergy-summary/src/fixtures'

const stories = storiesOf('Components|Allergy|Examples', module)

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Allergy Summary', () => (
  <AllergySummary title="Allergies" allergies={[fixtures.AllergyOne, fixtures.AllergyTwo]} />
))
