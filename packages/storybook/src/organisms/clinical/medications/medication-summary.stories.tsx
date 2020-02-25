import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import MedicationSummary from '@ltht-react/medication-summary'
import readme from '@ltht-react/medication-summary/README.md'

const stories = storiesOf('Organisms - Clinical|Medication', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => <MedicationSummary title="Medications" />)
