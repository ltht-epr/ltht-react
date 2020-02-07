import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AllergyDetailItem from '@ltht-react/allergy-detail'
import readme from '@ltht-react/allergy-summary/README.md'
import * as fixtures from './allergy.fixtures'

const stories = storiesOf('Components|Allergy|Examples', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Allergy Detail', () => <AllergyDetailItem title="Allergy" allergy={fixtures.AllergyOne} />)
