import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { DocumentReference } from '@ltht-react/types'

const StyledDocumentDescription = styled.div``

const DocumentDescription: FC<Props> = ({ document: { description } }, ...rest) => {
  if (!description) return <></>

  return <StyledDocumentDescription {...rest}>{description}</StyledDocumentDescription>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  document: DocumentReference
}

export default DocumentDescription
