import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import dlreadme from '@ltht-react/description-list/README.md'
import dtreadme from '@ltht-react/description-list-term/README.md'
import ddreadme from '@ltht-react/description-list-description/README.md'
import DescriptionList from '@ltht-react/description-list'
import DescriptionListTerm from '@ltht-react/description-list-term'
import DescriptionListDescription from '@ltht-react/description-list-description'

const stories = storiesOf('Atoms|Description List', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: [dlreadme, dtreadme, ddreadme],
  },
})

stories.addWithJSX('Description List', () => (
  <DescriptionList>
    <DescriptionListTerm>Term</DescriptionListTerm>
    <DescriptionListDescription>Description</DescriptionListDescription>
  </DescriptionList>
))
