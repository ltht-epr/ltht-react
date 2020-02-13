import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/summary-item-header/README.md'
import SummaryItemHeader from '@ltht-react/summary-item-header'

const stories = storiesOf('Atoms|Summary Items', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary Item header', () => <SummaryItemHeader primary="Test1" secondary="Test2" />)
