import React from 'react'
import { Story } from '@storybook/react'

import AppointmentSummary from '@ltht-react/appointment-summary'
import Card from '@ltht-react/card'
import encounters from './appointments.fixtures'

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Appointments</Card.Title>
    </Card.Header>
    <Card.List>
      {encounters.map(encounter => (
        <Card.ListItem key={encounter.id}>
          <AppointmentSummary encounter={encounter} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Appointment</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <AppointmentSummary encounter={encounters[3]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Appointments' }
