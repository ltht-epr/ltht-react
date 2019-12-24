import React from 'react'
import { storiesOf } from '@storybook/react'

import { FlagSummary } from '@ltht-react/widget'
import { Flag, StatusCode } from '@ltht-react/types'

const stories = storiesOf('Screens|Widgets', module)

const flag: Flag = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard',
  author: {
    display: 'John Smith',
    reference:
      'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser',
    type: 'Practitioner',
    identifier: undefined,
  },
  code: {
    coding: [{ display: 'Lives in Known High Risk Area', code: '109006' }],
  },
  period: {
    start: new Date(2019, 4, 5),
  },
  status: StatusCode.Active,
}

stories
  .addParameters({ backgrounds: [{ name: 'default', value: '#d8d8d8', default: true }] })
  .add('Component Default', () => <FlagSummary title="Alerts" flags={[flag]} />)
