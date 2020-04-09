import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import { BadgeIcon } from '@ltht-react/icon'
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
    <BadgeIcon size="small" status="secondary" />
    <BadgeIcon size="small" status="secondary" />
    <BadgeIcon size="small" status="secondary" />
    <BadgeIcon size="small" status="secondary" />
    <br />
    <BadgeIcon size="medium" status="secondary" />
    <BadgeIcon size="medium" status="secondary" />
    <BadgeIcon size="medium" status="secondary" />
    <BadgeIcon size="medium" status="secondary" />
    <br />
    <BadgeIcon size="large" status="secondary" />
    <BadgeIcon size="large" status="secondary" />
    <BadgeIcon size="large" status="secondary" />
    <BadgeIcon size="large" status="secondary" />
  </>
))
