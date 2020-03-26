import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import FlagSummary from '@ltht-react/flag-summary'
import readme from '@ltht-react/flag-summary/README.md'
import * as fixtures from './flag.fixtures'

const stories = storiesOf('Organisms - Clinical|Flag', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => <FlagSummary flags={[fixtures.FlagOne, fixtures.FlagTwo]} />)
