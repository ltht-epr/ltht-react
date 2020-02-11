import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/description-list-codeable-concept/README.md'
import DescriptionListCodeableConcept from '@ltht-react/description-list-codeable-concept'
import * as fixtures from './description-list.fixtures'

const stories = storiesOf('Molecules|Description List', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Description List Codeable Concept', () => (
  <DescriptionListCodeableConcept term="Code" concept={fixtures.codeableConcept} />
))
