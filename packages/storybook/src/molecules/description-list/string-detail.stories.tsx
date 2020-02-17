import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/string-detail/README.md'
import String from '@ltht-react/string-detail'

const stories = storiesOf('Molecules|Detail', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('String', () => <String term="Term" description="description test" />)
