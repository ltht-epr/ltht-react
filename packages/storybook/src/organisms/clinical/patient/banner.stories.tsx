/** @jsx jsx */
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import PatientBanner from '@ltht-react/patient-banner'

import readme from '@ltht-react/patient-banner/README.md'
import { AlivePatient, DeceasedPatient } from './banner.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Organisms - Clinical|Patient', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Banner', () => <PatientBanner patient={AlivePatient} />)
stories.addWithJSX('Banner:Deceased', () => <PatientBanner patient={DeceasedPatient} />)
