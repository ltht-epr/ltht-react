import { storiesOf } from '@storybook/react'
import { DefaultButton } from './button.fixtures'

const stories = storiesOf('Form/Buttons', module)
const examples = storiesOf('Form/Buttons/Examples', module)

stories.add('Component Default', DefaultButton)

examples.add('Start', DefaultButton)
