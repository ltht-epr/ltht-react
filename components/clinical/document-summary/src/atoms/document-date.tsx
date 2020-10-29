/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { DocumentReference } from '@ltht-react/types'
import { formatDate } from '@ltht-react/utils'

const DocumentDate: React.FC<Props> = ({ document }) => {
  const { created } = document
  const formattedDate = formatDate(new Date(Date.parse(created?.value ?? '')))

  if (!document.description) return <React.Fragment />
  return <div>{formattedDate}</div>
}

interface Props {
  document: DocumentReference
}

export default DocumentDate
