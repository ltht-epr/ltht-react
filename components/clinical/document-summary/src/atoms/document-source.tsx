import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { titleCase } from '@ltht-react/utils'
import { DocumentReference } from '@ltht-react/types'

const StyledDocumentSource = styled.div``

const DocumentSource: React.FC<Props> = ({ document, ...rest }) => {
  const source = document.metadata?.dataSources ? document.metadata.dataSources[0]?.display : undefined

  if (!source) return <></>

  return <StyledDocumentSource {...rest}>{titleCase(source)}</StyledDocumentSource>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  document: DocumentReference
}

export default DocumentSource
