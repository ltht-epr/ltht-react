import React from 'react'
import { storiesOf } from '@storybook/react'

import FlagSummary from '@ltht-react/flag-summary'
import readme from '@ltht-react/flag-summary/README.md'
import * as fixtures from '@ltht-react/flag-summary/src/fixtures'

const stories = storiesOf('Components|Flag|Examples', module)

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Flag Summary', () => <FlagSummary title="Alerts" flags={[fixtures.FlagOne, fixtures.FlagTwo]} />)
