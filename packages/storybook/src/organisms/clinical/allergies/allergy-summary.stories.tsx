/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AllergySummary from '@ltht-react/allergy-summary'
import readme from '@ltht-react/allergy-summary/README.md'
import { Card, CardHeader, CardBody, CardList } from '@ltht-react/card'
import allergies from './allergy.fixtures'

const stories = storiesOf('Organisms - Clinical|Allergy', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card noData={!allergies}>
    <CardHeader>
      <h3>Allergies</h3>
    </CardHeader>
    <CardBody>
      <CardList>
        <AllergySummary allergies={allergies} />
      </CardList>
    </CardBody>
  </Card>
))
