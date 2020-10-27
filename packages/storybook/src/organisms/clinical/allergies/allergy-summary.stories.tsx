import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AllergySummary from '@ltht-react/allergy-summary'
import readme from '@ltht-react/allergy-summary/README.md'
import Card from '@ltht-react/card'
import allergies from './allergy.fixtures'

const stories = storiesOf('Organisms - Clinical|Allergy', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card>
    <Card.Header>
      <h3>Allergies</h3>
    </Card.Header>
    <Card.Body>
      <Card.List>
        <AllergySummary allergies={allergies} />
      </Card.List>
    </Card.Body>
  </Card>
))
