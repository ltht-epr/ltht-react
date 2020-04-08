import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import FlagDetail from '@ltht-react/flag-detail'
import readme from '@ltht-react/flag-detail/README.md'
import { Card, CardHeader, CardBody } from '@ltht-react/card'

import flags from './flag.fixtures'

const stories = storiesOf('Organisms - Clinical|Flag', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Detail', () => (
  <Card noData={!flags}>
    <CardHeader position="center">
      <h3>Flag</h3>
    </CardHeader>
    <CardBody>
      <FlagDetail flag={flags[0]} />
    </CardBody>
  </Card>
))
