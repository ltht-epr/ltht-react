/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { titleCase } from '@ltht-react/utils'
import { DocumentReference } from '@ltht-react/types'

const DocumentSource: React.FC<Props> = ({ document }) => {
  const source = document.metadata?.dataSources ? document.metadata.dataSources[0]?.display : undefined

  if (!source) return <React.Fragment />

  return <div>{titleCase(source)}</div>
}

interface Props {
  document: DocumentReference
}

export default DocumentSource
