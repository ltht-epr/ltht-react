import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/header/README.md'
import { SubHeader } from '@ltht-react/header'

const stories = storiesOf('Atoms|Headers', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Sub header', () => <SubHeader>Header</SubHeader>)
