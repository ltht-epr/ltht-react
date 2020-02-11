import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/description-list-datetime/README.md'
import DescriptionListDatetime from '@ltht-react/description-list-datetime'
import * as fixtures from './description-list.fixtures'

const stories = storiesOf('Molecules|Description List', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Description List Datetime', () => (
  <DescriptionListDatetime term="Start Date" datetime={fixtures.partialDateTime} />
))
