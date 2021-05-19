import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { DocumentReference } from '@ltht-react/types'
import { formatDate } from '@ltht-react/utils'

const StyledDocumentDate = styled.div``

const DocumentDate: FC<Props> = ({ document: { created, description, indexed }, ...rest }) => {
  if (!description) return <></>

  const date = created?.value ? created?.value ?? '' : indexed.value ?? ''

  const formattedDate = formatDate(new Date(Date.parse(date)))

  return <StyledDocumentDate {...rest}>{formattedDate}</StyledDocumentDate>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  document: DocumentReference
}

export default DocumentDate
