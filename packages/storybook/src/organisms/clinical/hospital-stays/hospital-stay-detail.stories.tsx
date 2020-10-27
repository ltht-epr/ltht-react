import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import HospitalStayDetail from '@ltht-react/hospital-stay-detail'
import readme from '@ltht-react/hospital-stay-detail/README.md'
import Card from '@ltht-react/card'

import stays from './hospital-stay.fixtures'

const stories = storiesOf('Organisms - Clinical|Hospital Stay', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Detail', () => (
  <Card>
    <Card.Header>
      <h3>Hospital Stay</h3>
    </Card.Header>
    <Card.Body>
      <HospitalStayDetail hospitalStay={stays[2]} />
    </Card.Body>
  </Card>
))
