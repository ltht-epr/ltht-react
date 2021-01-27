import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import { TableIcon } from '@ltht-react/icon'
import TableIconReadMe from '@ltht-react/icon/README.md'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('UI|Atoms/Icons', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: TableIconReadMe,
  },
})

stories.addWithJSX('Table Icon', () => (
  <>
    <TableIcon status="default" size="small" />
    <TableIcon status="amber" size="small" />
    <TableIcon status="green" size="small" />
    <TableIcon status="red" size="small" />
    <br />
    <TableIcon status="default" size="medium" />
    <TableIcon status="amber" size="medium" />
    <TableIcon status="green" size="medium" />
    <TableIcon status="red" size="medium" />
    <br />
    <TableIcon status="default" size="large" />
    <TableIcon status="amber" size="large" />
    <TableIcon status="green" size="large" />
    <TableIcon status="red" size="large" />
  </>
))
