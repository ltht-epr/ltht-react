import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/description-list-period/README.md'
import DescriptionListPeriod from '@ltht-react/description-list-period'
import * as fixtures from './description-list.fixtures'

const stories = storiesOf('Molecules|Description List', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Description List Period', () => <DescriptionListPeriod period={fixtures.period} />)
