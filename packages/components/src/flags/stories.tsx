import React from 'react'
import { storiesOf } from '@storybook/react'

import { FlagOne, FlagTwo } from './fixtures'
import { FlagSummary } from '.'
import ReadMe from './README.md'
import { Flag } from '@ltht-react/core'

const stories = storiesOf('Widgets|Flag|Examples', module)

stories.addParameters({
  readme: {
    content: ReadMe,
  },
})

const handleClick = (flag: Flag) => {
  console.log("item clicked ", flag)
}

stories.addWithJSX('Flag Summary', () => <FlagSummary flags={[FlagOne, FlagTwo]} handleItemClick={handleClick} />)
