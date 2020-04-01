/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { DocumentReference } from '@ltht-react/types'

import Redacted from './document-redacted'

const DocumentSummaryItem: React.FC<Props> = ({ document = undefined }) => {
  if (!document) {
    return <div>No data!</div>
  }

  const summaryItem = (
    <React.Fragment>
      <div>{document.description}</div>
    </React.Fragment>
  )

  return document.metadata.isRedacted ? <Redacted /> : summaryItem
}

interface Props {
  document: DocumentReference | undefined
}

export default DocumentSummaryItem
