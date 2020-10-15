import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import readme from '@ltht-react/hospital-stay-summary/README.md'
import Card from '@ltht-react/card'
import stays from './hospital-stay.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Organisms - Clinical|Hospital Stay', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card>
    <Card.Header>
      <Card.Title>Hospital Stays</Card.Title>
    </Card.Header>
    <Card.List>
      {stays.map(stay => (
        <Card.ListItem key={stay.id}>
          <HospitalStaySummary hospitalStay={stay} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
))
