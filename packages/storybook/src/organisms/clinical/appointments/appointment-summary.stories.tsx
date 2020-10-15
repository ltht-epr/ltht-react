import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AppointmentSummary from '@ltht-react/appointment-summary'
import readme from '@ltht-react/appointment-summary/README.md'
import Card from '@ltht-react/card'
import encounters from './appointment-summary.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      <Card.Title>Appointments</Card.Title>
    </Card.Header>
    <Card.List>
      {encounters.map(encounter => (
        <Card.ListItem>
          <AppointmentSummary encounter={encounter} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
))
