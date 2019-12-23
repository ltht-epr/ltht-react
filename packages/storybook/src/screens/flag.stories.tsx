import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '@ltht-react/button'

const stories = storiesOf('Screens|Button', module)

stories
  .addParameters({ backgrounds: [{ name: 'default', value: '#d8d8d8', default: true }] })
  .add('Component Default', () => <Button>Default</Button>)
