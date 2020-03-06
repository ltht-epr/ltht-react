import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import GuidanceDetail from '@ltht-react/guidance-detail'
import readme from '@ltht-react/guidance-detail/README.md'
import { Card, CardHeader, CardBody } from '@ltht-react/card'

import GuidanceData from './guidance.fixture'

const stories = storiesOf('Organisms - Clinical|Guidance', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => {
  return (
    <Card noData={!GuidanceData}>
      <CardHeader>
        <h3>Guidance</h3>
      </CardHeader>
      <CardBody>
        <GuidanceDetail guidance={GuidanceData} />
      </CardBody>
    </Card>
  )
})
