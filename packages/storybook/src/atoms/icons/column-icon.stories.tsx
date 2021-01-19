import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import { ColumnIcon } from '@ltht-react/icon'
import ColumnIconReadMe from '@ltht-react/icon/README.md'

const stories = storiesOf('Atoms|Icons', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: ColumnIconReadMe,
  },
})

stories.addWithJSX('Column Icon', () => (
  <>
    <ColumnIcon status="default" size="small" />
    <ColumnIcon status="amber" size="small" />
    <ColumnIcon status="green" size="small" />
    <ColumnIcon status="red" size="small" />
    <br />
    <ColumnIcon status="default" size="medium" />
    <ColumnIcon status="amber" size="medium" />
    <ColumnIcon status="green" size="medium" />
    <ColumnIcon status="red" size="medium" />
    <br />
    <ColumnIcon status="default" size="large" />
    <ColumnIcon status="amber" size="large" />
    <ColumnIcon status="green" size="large" />
    <ColumnIcon status="red" size="large" />
  </>
))
