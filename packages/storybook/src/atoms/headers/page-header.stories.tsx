import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/page-header/README.md'
import PageHeader from '../../../../../components/atoms/headers/page-header/lib'

const stories = storiesOf('Atoms|Headers', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Page header', () => <PageHeader>Header</PageHeader>)
