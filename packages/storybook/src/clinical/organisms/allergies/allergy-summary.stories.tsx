import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AllergySummary from '@ltht-react/allergy-summary'
import readme from '@ltht-react/allergy-summary/README.md'
import Card from '@ltht-react/card'
import { AllergyIntolerance } from '@ltht-react/types'
import allergies from './allergy.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Clinical|Organisms/Allergy', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

const Allergies: React.FC = () => {
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

stories.addWithJSX('Summary', () => <Allergies />)

stories.addWithJSX('Redacted', () => (
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
))
