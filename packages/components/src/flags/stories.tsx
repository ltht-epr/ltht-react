import React from 'react'
import { storiesOf } from '@storybook/react'

import { FlagOne, FlagTwo } from './fixtures'
import { FlagSummary } from '.'
import ReadMe from './README.md'

const stories = storiesOf('Widgets|Flag|Examples', module)

stories.addParameters({
  readme: {
    content: ReadMe,
  },
})

stories.addWithJSX('Flag Summary', () => <FlagSummary flags={[FlagOne, FlagTwo]} />)
