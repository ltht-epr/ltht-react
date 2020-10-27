import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AllergyDetailItem from '@ltht-react/allergy-detail'
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

stories.addWithJSX('Detail', () => (
  <Card>
    <Card.Header>
      <h3>Allergy</h3>
    </Card.Header>
    <Card.Body>
      <AllergyDetailItem allergy={allergies[0]} />
    </Card.Body>
  </Card>
))
