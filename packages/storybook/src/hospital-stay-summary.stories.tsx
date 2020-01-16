import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import readme from '@ltht-react/hospital-stay-summary/README.md'
import * as fixtures from '@ltht-react/hospital-stay-summary/src/fixtures'
import { HospitalStay } from '@ltht-react/types'

const stories = storiesOf('Components|Hospital Stay|Examples', module)

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

const handleClick = (hospitalStay: HospitalStay) => {
  console.log('item clicked ', hospitalStay)
}

stories.addWithJSX('Hospital Stay Summary', () => (
  <HospitalStaySummary
    title="Hospital Stays"
    hospitalStays={[fixtures.HospitalStayOne, fixtures.HospitalStayTwo]}
    clickHandler={handleClick}
  />
))
