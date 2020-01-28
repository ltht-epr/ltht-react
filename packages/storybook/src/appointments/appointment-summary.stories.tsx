import React from 'react'
import { storiesOf } from '@storybook/react'

import AppointmentSummary from '@ltht-react/appointment-summary'
import readme from '@ltht-react/appointment-summary/README.md'
import * as fixtures from '@ltht-react/appointment-summary/src/fixtures'

const stories = storiesOf('Components|Appointment|Examples', module)

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Appointment Summary', () => (
  <AppointmentSummary title="Appointments" appointments={[fixtures.AppointmentOne, fixtures.AppointmentTwo]} />
))
