import React from 'react'
import { storiesOf } from '@storybook/react'
import Button, { DefaultButtons, PrimaryButtons, WorkflowButtons } from './button.fixtures'

const stories = storiesOf('Elements|Form/Buttons', module)
const examples = storiesOf('Elements|Form/Buttons/Examples', module)

stories.add('Component Default', () => <Button>Default</Button>)

examples.add('Default', DefaultButtons)
examples.add('Primary', PrimaryButtons)
examples.add('Workflow', WorkflowButtons)
