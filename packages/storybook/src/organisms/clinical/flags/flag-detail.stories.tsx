import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import FlagDetail from '@ltht-react/flag-detail'
import readme from '@ltht-react/flag-detail/README.md'
import Card from '@ltht-react/card'

import flags from './flag.fixtures'

const stories = storiesOf('Organisms - Clinical|Flag', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Detail', () => (
  <Card>
    <Card.Header>
      <h3>Flag</h3>
    </Card.Header>
    <Card.Body>
      <FlagDetail flag={flags[0]} />
    </Card.Body>
  </Card>
))
