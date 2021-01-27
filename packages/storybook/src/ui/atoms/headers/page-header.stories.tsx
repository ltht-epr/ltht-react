import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/header/README.md'
import { PageHeader } from '@ltht-react/header'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('UI|Atoms/Headers', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Page header', () => <PageHeader>Header</PageHeader>)
