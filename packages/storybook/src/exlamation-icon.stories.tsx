import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import ExclamationIcon from '@ltht-react/exclamation-icon'
import ExclamationIconReadMe from '@ltht-react/exclamation-icon/README.md'

const stories = storiesOf('Elements|Icons|Examples', module)

stories.addParameters({
  readme: {
    content: ExclamationIconReadMe,
  },
})

stories.addWithJSX('Exlamation Icon', () => <ExclamationIcon status="red" size="medium" />)
