import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import SubHeader from '../../../../../components/atoms/headers/sub-header/lib'
import readme from '@ltht-react/sub-header/README.md'

const stories = storiesOf('Atoms|Headers', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Sub header', () => <SubHeader>Header</SubHeader>)
