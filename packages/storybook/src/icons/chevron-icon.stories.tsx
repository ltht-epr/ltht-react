import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import ChevronIcon from '@ltht-react/chevron-icon'
import ChevronIconReadMe from '@ltht-react/chevron-icon/README.md'

const stories = storiesOf('Components|Icons', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: ChevronIconReadMe,
  },
})

stories.addWithJSX('Chevron Icon', () => (
  <>
    <ChevronIcon direction="up" size="small" />
    <ChevronIcon direction="down" size="small" />
    <ChevronIcon direction="left" size="small" />
    <ChevronIcon direction="right" size="small" />
    <br />
    <ChevronIcon direction="up" size="medium" />
    <ChevronIcon direction="down" size="medium" />
    <ChevronIcon direction="left" size="medium" />
    <ChevronIcon direction="right" size="medium" />
    <br />
    <ChevronIcon direction="up" size="large" />
    <ChevronIcon direction="down" size="large" />
    <ChevronIcon direction="left" size="large" />
    <ChevronIcon direction="right" size="large" />
  </>
))
