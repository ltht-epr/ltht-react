import { MouseEvent } from 'react'
import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import MedicationSummary from '@ltht-react/medication-summary'

import MedicationFixtures from './medications.fixture'

export const Summary: Story = () => {
  const clickHandler = (e: MouseEvent<HTMLLIElement>): void => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>Medications</Card.Title>
      </Card.Header>
      <Card.List>
        <Card.ListItem onClick={clickHandler}>
          <MedicationSummary medication={MedicationFixtures[0]} />
        </Card.ListItem>
        <Card.ListItem onClick={clickHandler}>
          <MedicationSummary medication={MedicationFixtures[1]} />
        </Card.ListItem>
        <Card.ListItem onClick={clickHandler}>
          <MedicationSummary medication={MedicationFixtures[2]} />
        </Card.ListItem>
      </Card.List>
    </Card>
  )
}

export const Changed: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Medications</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <MedicationSummary medication={MedicationFixtures[3]} />
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
        <MedicationSummary medication={MedicationFixtures[4]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Medications' }
