/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import HospitalStayDetail from '@ltht-react/hospital-stay-detail'
import readme from '@ltht-react/hospital-stay-detail/README.md'
import { Card, CardHeader, CardBody } from '@ltht-react/card'

import stays from './hospital-stay.fixtures'

const stories = storiesOf('Organisms - Clinical|Hospital Stay', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Detail', () => (
  <Card noData={!stays[0]}>
    <CardHeader position="center">
      <h3>Hospital Stay</h3>
    </CardHeader>
    <CardBody>
      <HospitalStayDetail hospitalStay={stays[2]} />
    </CardBody>
  </Card>
))
