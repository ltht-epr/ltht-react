import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AppointmentSummary from '@ltht-react/appointment-summary'
import readme from '@ltht-react/appointment-summary/README.md'
import Card from '@ltht-react/card'
import encounters from './appointment-summary.fixtures'

const stories = storiesOf('Organisms - Clinical|Appointment', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card>
    <Card.Header>
      <h3>Appointments</h3>
    </Card.Header>
    <Card.Body>
      <Card.List>
        <AppointmentSummary encounters={encounters} />
      </Card.List>
    </Card.Body>
  </Card>
))
