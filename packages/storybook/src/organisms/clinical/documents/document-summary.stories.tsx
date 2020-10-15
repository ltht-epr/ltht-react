import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import DocumentSummary from '@ltht-react/document-summary'
import readme from '@ltht-react/document-summary/README.md'
import Card from '@ltht-react/card'
import documents from './document-summary.fixture'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Organisms - Clinical|Document', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Documents</Card.Title>
      </Card.Header>
      <Card.List>
        {documents.map(document => (
          <Card.ListItem key={document.id}>
            <DocumentSummary document={document} />
          </Card.ListItem>
        ))}
      </Card.List>
    </Card>
  )
})
