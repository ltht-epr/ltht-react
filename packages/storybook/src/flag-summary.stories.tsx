import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import FlagSummary from '@ltht-react/flag-summary'
import FlagSummaryReadMe from '@ltht-react/flag-summary/README.md'
import * as fixtures from '@ltht-react/flag-summary/src/fixtures'
import { Flag } from '@ltht-react/types'

const stories = storiesOf('Widgets|Flag|Examples', module)

stories.addParameters({
  readme: {
    content: FlagSummaryReadMe,
  },
})

const handleClick = (flag: Flag) => {
  console.log('item clicked ', flag)
}

stories.addWithJSX('Flag Summary', () => (
  <FlagSummary title="Alerts" flags={[fixtures.FlagOne, fixtures.FlagTwo]} handleItemClick={handleClick} />
))
