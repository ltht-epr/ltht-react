import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import SpinnerIcon from '@ltht-react/spinner-icon'
import SpinnerIconReadMe from '@ltht-react/spinner-icon/README.md'

const stories = storiesOf('Components|Icons', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: SpinnerIconReadMe,
  },
})

stories.addWithJSX('Spinner Icon', () => (
  <>
    <SpinnerIcon size="small" />
    <SpinnerIcon size="medium" />
    <SpinnerIcon size="large" />
  </>
))
