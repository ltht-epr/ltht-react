import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import MedicationSummary from '@ltht-react/medication-summary'
import readme from '@ltht-react/medication-summary/README.md'
import { Card, CardHeader, CardBody, CardList } from '@ltht-react/card'

import MedicationData from './medication.fixture'

const stories = storiesOf('Organisms - Clinical|Medication', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => {
  return (
    <Card noData={!MedicationData}>
      <CardHeader>
        <h3>Medications</h3>
      </CardHeader>
      <CardBody>
        <CardList>
          <MedicationSummary medicationlist={MedicationData} />
        </CardList>
      </CardBody>
    </Card>
  )
})
