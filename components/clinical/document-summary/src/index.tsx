import React from 'react'

import { DocumentReference } from '@ltht-react/types'

const DocumentSummary: React.FC<Props> = ({ documents = undefined }) => {
  if (!documents) {
    return null
  }

  return (
    <div>
      {documents.map(doc => (
        <div>{doc.description}</div>
      ))}
    </div>
  )
}

interface Props {
  documents: DocumentReference[] | undefined
}

export default DocumentSummary
