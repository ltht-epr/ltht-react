import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AppointmentSummary from '@ltht-react/appointment-summary'
import readme from '@ltht-react/appointment-summary/README.md'
import { Card, CardHeader, CardBody, CardList } from '@ltht-react/card'
import encounters from './appointment-summary.fixtures'

const stories = storiesOf('Organisms - Clinical|Appointment', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <Card noData={!encounters}>
    <CardHeader>
      <h3>Appointments</h3>
    </CardHeader>
    <CardBody>
      <CardList>
        <AppointmentSummary encounters={encounters} />
      </CardList>
    </CardBody>
  </Card>
))
