import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import FlagDetail from '@ltht-react/flag-detail'
import readme from '@ltht-react/flag-detail/README.md'
import * as fixtures from './flag.fixtures'

const stories = storiesOf('Components|Flag', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Flag Detail', () => <FlagDetail title="Alert" flag={fixtures.FlagOne} />)
