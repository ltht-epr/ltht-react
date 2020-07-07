import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import { CircleIcon } from '@ltht-react/icon'
import CircleIconReadMe from '@ltht-react/icon/README.md'

const stories = storiesOf('Atoms|Icons', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: CircleIconReadMe,
  },
})

stories.addWithJSX('Circle Icon', () => (
  <>
    <CircleIcon status="default" size="small" />
    <CircleIcon status="green" size="small" />
    <br />
    <CircleIcon status="default" size="medium" />
    <CircleIcon status="green" size="medium" />
    <br />
    <CircleIcon status="default" size="large" />
    <CircleIcon status="green" size="large" />
  </>
))
