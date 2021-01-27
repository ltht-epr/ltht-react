import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import dlreadme from '@ltht-react/list/README.md'
import { ListItem, UnorderedList } from '@ltht-react/list'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('UI|Atoms/Unordered List', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: dlreadme,
  },
})

stories.addWithJSX('Unordered List', () => (
  <UnorderedList>
    <ListItem>Term</ListItem>
  </UnorderedList>
))
