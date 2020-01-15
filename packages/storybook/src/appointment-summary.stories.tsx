import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import AppointmentSummary from '@ltht-react/appointment-summary'
import readme from '@ltht-react/appointment-summary/README.md'
import * as fixtures from '@ltht-react/appointment-summary/src/fixtures'
import { Encounter } from '@ltht-react/types'

const stories = storiesOf('Components|Appointment|Examples', module)

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

const handleClick = (appointment: Encounter) => {
  console.log('item clicked ', appointment)
}

stories.addWithJSX('Appointment Summary', () => (
  <AppointmentSummary
    title="Appointments"
    appointments={[fixtures.AppointmentOne, fixtures.AppointmentTwo]}
    clickHandler={handleClick}
  />
))
