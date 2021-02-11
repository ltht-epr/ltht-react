import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { DocumentReference } from '@ltht-react/types'
import { formatDate } from '@ltht-react/utils'

const StyledDocumentDate = styled.div``

const DocumentDate: FC<Props> = ({ document: { created, description }, ...rest }) => {
  if (!description) return <></>

  const formattedDate = formatDate(new Date(Date.parse(created?.value ?? '')))

  return <StyledDocumentDate {...rest}>{formattedDate}</StyledDocumentDate>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  document: DocumentReference
}

export default DocumentDate
