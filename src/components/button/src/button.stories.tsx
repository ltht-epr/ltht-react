import { storiesOf } from '@storybook/react'
import { DefaultButton } from './button.fixtures'

const stories = storiesOf('Elements|Form/Buttons', module)
const examples = storiesOf('Elements|Form/Buttons/Examples', module)

stories.add('Component Default', DefaultButton)

examples.add('Start', DefaultButton)
