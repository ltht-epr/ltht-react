import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/description-list-resource-reference/README.md'
import DescriptionListResourceReference from '@ltht-react/description-list-resource-reference'
import * as fixtures from './description-list.fixtures'

const stories = storiesOf('Molecules|Description List', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Description List Resource Reference', () => (
  <DescriptionListResourceReference term="Author" resourceReference={fixtures.resourceReference} />
))
