/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import FlagSummary from '@ltht-react/flag-summary'
import readme from '@ltht-react/flag-summary/README.md'
import { Card, CardHeader, CardBody, CardList } from '@ltht-react/card'
import flags from './flag.fixtures'

const stories = storiesOf('Organisms - Clinical|Flag', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card noData={!flags}>
    <CardHeader>
      <h3>Flags</h3>
    </CardHeader>
    <CardBody>
      <CardList>
        <FlagSummary flags={flags} />
      </CardList>
    </CardBody>
  </Card>
))
