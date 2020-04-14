import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import { CounterIcon } from '@ltht-react/icon'
import ChevronIconReadMe from '@ltht-react/icon/README.md'

const stories = storiesOf('Atoms|Icons', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: ChevronIconReadMe,
  },
})

stories.addWithJSX('Badge Icon', () => (
  <>
    <br />
    <CounterIcon size="small" status="primary" value={1} />
    <CounterIcon size="medium" status="primary" value={5} />
    <CounterIcon size="large" status="primary" value={10} />
    <br />
    <CounterIcon size="small" status="secondary" value={1} />
    <CounterIcon size="medium" status="secondary" value={5} />
    <CounterIcon size="large" status="secondary" value={10} />
    <br />
    <CounterIcon size="small" status="amber" value={1} />
    <CounterIcon size="medium" status="amber" value={5} />
    <CounterIcon size="large" status="amber" value={10} />
    <br />
    <CounterIcon size="small" status="red" value={1} />
    <CounterIcon size="medium" status="red" value={5} />
    <CounterIcon size="large" status="red" value={10} />
    <br />
    <CounterIcon size="small" status="default" value={1} />
    <CounterIcon size="medium" status="default" value={5} />
    <CounterIcon size="large" status="default" value={10} />
    <br />
    <CounterIcon size="small" status="green" value={1} />
    <CounterIcon size="medium" status="green" value={5} />
    <CounterIcon size="large" status="green" value={10} />
  </>
))
