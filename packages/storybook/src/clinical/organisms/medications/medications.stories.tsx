import { MouseEvent } from 'react'
import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import MedicationSummary from '@ltht-react/medication-summary'
import MedicationDetail from '@ltht-react/medication-detail'

import { useDetailViewType } from '@ltht-react/type-detail'
import { Button } from '@ltht-react/button'
import { DetailViewType } from '@ltht-react/types'
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
        <Card.ListItem onClick={clickHandler}>
          <MedicationSummary medication={MedicationFixtures[3]} />
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
        <MedicationSummary medication={MedicationFixtures[4]} />
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
        <MedicationSummary medication={MedicationFixtures[5]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export const Detail: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Medication</Card.Title>
    </Card.Header>
    <Card.Body>
      <MedicationDetail medication={MedicationFixtures[0]} />
    </Card.Body>
  </Card>
)

export const DetailsCollapsibleView: Story = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { viewType, toggle } = useDetailViewType()
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Collapsible detail view{' '}
          <Button
            type="button"
            value={viewType === DetailViewType.Expanded ? 'View compacted' : 'View expanded'}
            onClick={toggle}
          />
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <MedicationDetail medication={MedicationFixtures[1]} viewType={viewType} />
      </Card.Body>
    </Card>
  )
}

export default { title: 'Clinical/Organisms/Medications' }
