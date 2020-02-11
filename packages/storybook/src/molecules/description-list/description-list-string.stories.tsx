import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/description-list-string/README.md'
import DescriptionListString from '@ltht-react/description-list-string'

const stories = storiesOf('Molecules|Description List', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Description List String', () => (
  <DescriptionListString term="Term" description="description test" />
))
