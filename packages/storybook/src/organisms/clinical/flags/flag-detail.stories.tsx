import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import FlagDetail from '@ltht-react/flag-detail'
import readme from '@ltht-react/flag-detail/README.md'
import * as fixtures from './flag.fixtures'

const stories = storiesOf('Organisms - Clinical|Flag', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Detail', () => <FlagDetail flag={fixtures.FlagOne} />)
