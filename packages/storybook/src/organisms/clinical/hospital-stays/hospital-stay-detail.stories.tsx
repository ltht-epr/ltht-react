import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import HospitalStayDetail from '@ltht-react/hospital-stay-detail'
import readme from '@ltht-react/hospital-stay-detail/README.md'
import * as fixtures from './hospital-stay.fixtures'

const stories = storiesOf('Organisms - Clinical|Hospital Stay', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Detail', () => (
  <HospitalStayDetail title="Hospital Stay" hospitalStay={fixtures.HospitalStayThree} />
))
