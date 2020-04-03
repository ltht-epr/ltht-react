/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { DocumentReference } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import Redacted from './document-redacted'
import DocumentSummaryContent from './document-summary-content'

const DocumentSummaryItem: React.FC<Props> = ({ document = undefined, clickHandler }) => {
  if (!document) {
    return <div>No data!</div>
  }

  const created = document.created
    ? new Date(Date.parse(document.created.value ?? '')).toLocaleDateString('en-gb')
    : null

  const source = document.metadata?.dataSources ? document.metadata.dataSources[0]?.display : undefined

  const handleClick = (): void => {
    clickHandler && clickHandler(document)
  }

  const summaryItem = (
    <ListItem key={document.id}>
      <DocumentSummaryContent
        description={document.description ?? undefined}
        created={created ?? undefined}
        source={source}
        status={document.status}
        clickHandler={handleClick}
      />
    </ListItem>
  )

  return document.metadata.isRedacted ? <Redacted /> : summaryItem
}

interface Props {
  document?: DocumentReference
  clickHandler?(document: DocumentReference): void
}

export default DocumentSummaryItem
