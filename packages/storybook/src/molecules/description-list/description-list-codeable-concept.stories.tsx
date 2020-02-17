import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/codeable-concept-detail/README.md'
import CodeableConceptDetail from '@ltht-react/codeable-concept-detail'
import * as fixtures from './description-list.fixtures'

const stories = storiesOf('Molecules|Detail', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Codeable Concept', () => <CodeableConceptDetail term="Code" concept={fixtures.codeableConcept} />)
