import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/period-detail/README.md'
import Period from '@ltht-react/period-detail'
import * as fixtures from './detail.fixtures'

const stories = storiesOf('Molecules|Detail', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Period', () => <Period period={fixtures.period} />)
