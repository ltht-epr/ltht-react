import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import GuidanceSummary from '@ltht-react/guidance-summary'
import readme from '@ltht-react/guidance-summary/README.md'
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
      <CardHeader titleText="Test">
        <h3>Guidance</h3>
      </CardHeader>
      <CardBody collapsed={false}>
        <GuidanceSummary guidanceList={GuidanceData} />
      </CardBody>
    </Card>
  )
})
