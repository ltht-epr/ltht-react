import React from 'react'
import { storiesOf } from '@storybook/react'
import { useState } from '@storybook/addons'
import JSXAddon from 'storybook-addon-jsx'

import DocumentSummary from '@ltht-react/document-summary'
import readme from '@ltht-react/document-summary/README.md'
import Card from '@ltht-react/card'
import { DocumentReference } from '@ltht-react/types'
import documents from './document-summary.fixture'

const stories = storiesOf('Organisms - Clinical|Document', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => {
  const [doc, setDoc] = useState<DocumentReference | undefined>(undefined)

  const clickHandler = (document: DocumentReference): void => {
    setDoc(document)
  }

  return (
    <div>
      <Card>
        <Card.Header>
          <h3>Documents</h3>
        </Card.Header>
        <Card.Body>
          <DocumentSummary documents={documents} clickHandler={clickHandler} />
        </Card.Body>
      </Card>
      {doc && <div>{doc.id}</div>}
    </div>
  )
})
