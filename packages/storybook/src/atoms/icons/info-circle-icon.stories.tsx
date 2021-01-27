import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import { InfoCircleIcon } from '@ltht-react/icon'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Atoms|Icons', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addWithJSX('Info Circle Icon', () => (
  <>
    <InfoCircleIcon status="green" size="small" />
    <InfoCircleIcon status="green" size="medium" />
    <InfoCircleIcon status="green" size="large" />
    <br />
    <InfoCircleIcon status="amber" size="small" />
    <InfoCircleIcon status="amber" size="medium" />
    <InfoCircleIcon status="amber" size="large" />
    <br />
    <InfoCircleIcon status="red" size="small" />
    <InfoCircleIcon status="red" size="medium" />
    <InfoCircleIcon status="red" size="large" />
  </>
))
