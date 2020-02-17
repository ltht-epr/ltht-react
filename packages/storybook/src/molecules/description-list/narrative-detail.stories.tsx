import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/narrative-detail/README.md'
import Narrative from '@ltht-react/narrative-detail'
import * as fixtures from './detail.fixtures'

const stories = storiesOf('Molecules|Detail', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Narrative', () => <Narrative narrative={fixtures.narrative} />)
