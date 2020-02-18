import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import { ExclamationIcon } from '@ltht-react/icon'
import ExclamationIconReadMe from '@ltht-react/icon/README.md'

const stories = storiesOf('Atoms|Icons', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: ExclamationIconReadMe,
  },
})

stories.addWithJSX('Exclamation Icon', () => (
  <>
    <ExclamationIcon status="green" size="small" />
    <ExclamationIcon status="green" size="medium" />
    <ExclamationIcon status="green" size="large" />
    <ExclamationIcon status="amber" size="small" />
    <ExclamationIcon status="amber" size="medium" />
    <ExclamationIcon status="amber" size="large" />
    <ExclamationIcon status="red" size="small" />
    <ExclamationIcon status="red" size="medium" />
    <ExclamationIcon status="red" size="large" />
  </>
))
