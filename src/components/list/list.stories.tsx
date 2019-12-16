import { storiesOf, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { DefaultList, EndColumn, SingleColumn } from './list.fixtures'

addDecorator(withInfo)

const stories = storiesOf('Components|List', module)
const examples = storiesOf('Components|List/Examples', module)

stories.add('Component Default', DefaultList)
examples.add('Single Column', SingleColumn)
examples.add('End Column', EndColumn)
