import React from 'react'
import { storiesOf } from '@storybook/react'
import { useState } from '@storybook/addons'
import JSXAddon from 'storybook-addon-jsx'

import DocumentSummary from '@ltht-react/document-summary'
import readme from '@ltht-react/document-summary/README.md'
import { Card, CardHeader, CardBody } from '@ltht-react/card'
import { DocumentReference } from '@ltht-react/types'
import documents from './document-summary.fixture'

const stories = storiesOf('Organisms - Clinical|Document', module)

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
      <Card noData={!documents}>
        <CardHeader>
          <h3>Documents</h3>
        </CardHeader>
        <CardBody>
          <DocumentSummary documents={documents} clickHandler={clickHandler} />
        </CardBody>
      </Card>
      {doc && <div>{doc.id}</div>}
    </div>
  )
})
