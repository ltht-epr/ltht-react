import { Story } from '@storybook/react'

import MedicationSummary from '@ltht-react/medication-summary'
import Card from '@ltht-react/card'

import MedicationData from './medications.fixture'

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Medications</Card.Title>
    </Card.Header>
    <Card.List>
      <MedicationSummary medicationlist={MedicationData} />
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Medications' }
