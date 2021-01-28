import React from 'react'
import { Story } from '@storybook/react'

import AllergyDetailItem from '@ltht-react/allergy-detail'
import AllergySummary from '@ltht-react/allergy-summary'
import Card from '@ltht-react/card'
import { AllergyIntolerance } from '@ltht-react/types'
import allergies from './allergies.fixtures'

export const Detail: Story = () => (
  <Card>
    <Card.Header>
      <h3>Allergy</h3>
    </Card.Header>
    <Card.Body>
      <AllergyDetailItem allergy={allergies[0]} />
    </Card.Body>
  </Card>
)

export const Summary: Story = () => {
  const [selected, setSelected] = React.useState('')

  const clickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, allergy: AllergyIntolerance): void => {
    e.preventDefault()
    e.stopPropagation()
    setSelected(allergy.id)
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>Allergies</Card.Title>
      </Card.Header>
      <Card.List>
        {allergies.map(allergy => (
          <Card.ListItem
            key={allergy.id}
            onClick={(e): void => clickHandler(e, allergy)}
            selected={allergy.id === selected}
          >
            <AllergySummary allergy={allergy} />
          </Card.ListItem>
        ))}
      </Card.List>
    </Card>
  )
}

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Allergy</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <AllergySummary allergy={allergies[3]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Allergies' }
