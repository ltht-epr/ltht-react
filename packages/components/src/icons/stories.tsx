import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { ExclamationIcon } from '.'

const stories = storiesOf('Elements|Icons|Examples', module)

stories.addWithJSX('Exlamation Icon', () => <ExclamationIcon status="red" size="small" />)
