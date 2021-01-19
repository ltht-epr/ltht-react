/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import readme from '@ltht-react/hospital-stay-summary/README.md'
import { Card, CardHeader, CardBody, CardList } from '@ltht-react/card'
import stays from './hospital-stay.fixtures'

const stories = storiesOf('Organisms - Clinical|Hospital Stay', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card noData={!stays}>
    <CardHeader>
      <h3>Hospital Stays</h3>
    </CardHeader>
    <CardBody>
      <CardList>
        <HospitalStaySummary hospitalStays={stays} />
      </CardList>
    </CardBody>
  </Card>
))
