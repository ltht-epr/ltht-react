import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import DocumentSummary from '@ltht-react/document-summary'
import readme from '@ltht-react/condition-summary/README.md'
import { Card, CardHeader, CardList } from '@ltht-react/card'
import * as fixture from './document-summary.fixture'

const stories = storiesOf('Organisms - Clinical|Document', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

const documents = [fixture.Document1, fixture.Document2, fixture.Document3]

stories.addWithJSX('Summary', () => {
  return (
    <Card noData={!documents}>
      <CardHeader>
        <h3>Documents</h3>
      </CardHeader>
      <CardList>
        <DocumentSummary documents={documents} />
      </CardList>
    </Card>
  )
})
