import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import { ChevronCircleIcon } from '@ltht-react/icon'
import ChevronIconReadMe from '@ltht-react/icon/README.md'

const stories = storiesOf('Atoms|Icons', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: ChevronIconReadMe,
  },
})

stories.addWithJSX('Chevron Icon', () => (
  <>
    <ChevronCircleIcon direction="up" size="small" />
    <ChevronCircleIcon direction="down" size="small" />
    <ChevronCircleIcon direction="left" size="small" />
    <ChevronCircleIcon direction="right" size="small" />
    <br />
    <ChevronCircleIcon direction="up" size="medium" />
    <ChevronCircleIcon direction="down" size="medium" />
    <ChevronCircleIcon direction="left" size="medium" />
    <ChevronCircleIcon direction="right" size="medium" />
    <br />
    <ChevronCircleIcon direction="up" size="large" />
    <ChevronCircleIcon direction="down" size="large" />
    <ChevronCircleIcon direction="left" size="large" />
    <ChevronCircleIcon direction="right" size="large" />
  </>
))
