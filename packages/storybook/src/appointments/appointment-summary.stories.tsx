import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AppointmentSummary from '@ltht-react/appointment-summary'
import readme from '@ltht-react/appointment-summary/README.md'
import * as fixtures from './appointment-summary.fixtures'

const stories = storiesOf('Components|Appointment|Examples', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Appointment Summary', () => (
  <AppointmentSummary title="Appointments" encounters={[fixtures.AppointmentOne, fixtures.AppointmentTwo]} />
))
