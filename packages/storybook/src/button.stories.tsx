import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '@ltht-react/button'

const stories = storiesOf('Elements|Button', module)

stories.add('Component Default', () => <Button>Default</Button>)
