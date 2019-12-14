import React from 'react'
import { storiesOf } from '@storybook/react'

import { Example } from '..'

storiesOf('Example', module).add('Default', () => <Example />)
storiesOf('Example', module).add('With child text', () => <Example>Example</Example>)
