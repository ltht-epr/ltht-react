import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import ConditionSummary from '@ltht-react/condition-summary'
import readme from '@ltht-react/condition-summary/README.md'
import { Card, CardHeader, CardList } from '@ltht-react/card'
import * as fixtures from './condition-summary.fixtures'

const stories = storiesOf('Organisms - Clinical|Condition', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

const conditions = [fixtures.ConditionOne, fixtures.ConditionTwo]

stories.addWithJSX('Summary', () => {
  return (
    <Card noData={!conditions}>
      <CardHeader>
        <h3>Conditions</h3>
      </CardHeader>
      <CardList>
        <ConditionSummary conditions={conditions} />
      </CardList>
    </Card>
  )
})
