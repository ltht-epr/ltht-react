import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import MedicationSummary from '@ltht-react/medication-summary'

import MedicationFixtures from './medications.fixture'

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Medications</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <MedicationSummary medication={MedicationFixtures[0]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Medications</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <MedicationSummary medication={MedicationFixtures[1]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Medications' }
