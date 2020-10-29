import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import MedicationSummary from '@ltht-react/medication-summary'
import readme from '@ltht-react/medication-summary/README.md'
import Card from '@ltht-react/card'

import MedicationData from './medication.fixture'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Organisms - Clinical|Medication', module) as any

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
        <h3>Medications</h3>
      </Card.Header>
      <Card.List>
        <MedicationSummary medicationlist={MedicationData} />
      </Card.List>
    </Card>
  )
})
