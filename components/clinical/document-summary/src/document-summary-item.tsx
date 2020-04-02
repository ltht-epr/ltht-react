/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { DocumentReference } from '@ltht-react/types'
import { ListItem } from '@ltht-react/list'
import Redacted from './document-redacted'
import DocumentSummaryContent from './document-summary-content'

const DocumentSummaryItem: React.FC<Props> = ({ document = undefined }) => {
  if (!document) {
    return <div>No data!</div>
  }

  const created = document.created
    ? new Date(Date.parse(document.created.value ?? '')).toLocaleDateString('en-gb')
    : null

  const summaryItem = (
    <ListItem key={document.id}>
      <DocumentSummaryContent
        description={document.description ?? undefined}
        created={created ?? undefined}
        source="[SOURCE HERE]"
        status={document.status}
        clickable
      />
    </ListItem>
  )

  return document.metadata.isRedacted ? <Redacted /> : summaryItem
}

interface Props {
  document: DocumentReference | undefined
}

export default DocumentSummaryItem
