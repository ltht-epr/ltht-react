import { storiesOf, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { DefaultList } from './list.fixtures'

addDecorator(withInfo)

const stories = storiesOf('Elements|List', module)
const examples = storiesOf('Elements|List/Examples', module)

stories.add('Component Default', DefaultList)
