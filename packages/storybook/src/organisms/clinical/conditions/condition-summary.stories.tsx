/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import ConditionSummary from '@ltht-react/condition-summary'
import readme from '@ltht-react/condition-summary/README.md'
import { Card, CardHeader, CardList, CardBody } from '@ltht-react/card'
import conditions from './condition-summary.fixtures'

const stories = storiesOf('Organisms - Clinical|Condition', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => {
  return (
    <Card noData={!conditions}>
      <CardHeader>
        <h3>Conditions</h3>
      </CardHeader>
      <CardBody>
        <CardList>
          <ConditionSummary conditions={conditions} />
        </CardList>
      </CardBody>
    </Card>
  )
})
