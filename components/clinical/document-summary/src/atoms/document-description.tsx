/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { DocumentReference } from '@ltht-react/types'

const DocumentDescription: React.FC<Props> = ({ document }) => {
  if (!document.description) return <React.Fragment />
  return <React.Fragment>{document.description}</React.Fragment>
}

interface Props {
  document: DocumentReference
}

export default DocumentDescription
