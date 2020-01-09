import React from 'react'
import { storiesOf } from '@storybook/react'

import AllergySummary from '@ltht-react/allergy-summary'
import * as fixtures from '@ltht-react/allergy-summary/src/fixtures'
import { AllergyIntolerance } from '@ltht-react/types'

const stories = storiesOf('Widgets|Allergy|Examples', module)

const handleClick = (allergy: AllergyIntolerance) => {
  console.log('item clicked ', allergy)
}

stories.addWithJSX('Allergy Summary', () => (
  <AllergySummary title="Allergies" allergies={[fixtures.AllergyOne, fixtures.AllergyTwo]} clickHandler={handleClick} />
))
