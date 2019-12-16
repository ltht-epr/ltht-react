import { storiesOf } from '@storybook/react'
import { DefaultList } from './list.fixtures'

const stories = storiesOf('Elements|List', module)
const examples = storiesOf('Elements|List/Examples', module)

stories.add('Component Default', DefaultList)
