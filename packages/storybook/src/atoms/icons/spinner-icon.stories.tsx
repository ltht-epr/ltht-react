import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import { SpinnerIcon } from '@ltht-react/icon'
import SpinnerIconReadMe from '@ltht-react/icon/README.md'

const stories = storiesOf('Atoms|Icons', module) as any

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
