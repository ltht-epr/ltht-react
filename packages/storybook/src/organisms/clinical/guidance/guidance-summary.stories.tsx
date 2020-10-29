import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import GuidanceSummary from '@ltht-react/guidance-summary'
import readme from '@ltht-react/guidance-summary/README.md'
import Card from '@ltht-react/card'

import GuidanceData from './guidance.fixture'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Organisms - Clinical|Guidance', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => {
  return (
    <Card>
      <Card.Header>
        <h3>Guidance</h3>
      </Card.Header>
      <Card.Body>
        <GuidanceSummary guidanceList={GuidanceData} />
      </Card.Body>
    </Card>
  )
})
