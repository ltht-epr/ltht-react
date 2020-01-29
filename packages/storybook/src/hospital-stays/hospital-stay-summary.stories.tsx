import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import readme from '@ltht-react/hospital-stay-summary/README.md'
import * as fixtures from './hospital-stay-summary.fixtures'

const stories = storiesOf('Components|Hospital Stay|Examples', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Hospital Stay Summary', () => (
  <HospitalStaySummary title="Hospital Stays" hospitalStays={[fixtures.HospitalStayOne, fixtures.HospitalStayTwo]} />
))
